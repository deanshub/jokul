import React, { ChangeEvent, useState, useEffect, useRef, FocusEvent, useCallback } from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";

import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import { BaseInputField } from "@fremtind/jkl-text-input-react";
import { useAnimatedHeight, useKeyListener, useClickOutside } from "@fremtind/jkl-react-hooks";
import { IconButton } from "@fremtind/jkl-icon-button-react";

import { Calendar } from "./Calendar";
import { isSameDay, formatDate, parseDateString } from "./dateFunctions";

export interface ChangeDate {
    date: Date;
}

type onChangeEventHandler = (date?: Date, e?: ChangeEvent) => void;
type onBlurEventHandler = (date?: Date, e?: FocusEvent) => void;
type onFocusEventHandler = (date?: Date, e?: FocusEvent) => void;

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    placeholder?: string;
    months?: string[];
    days?: string[];
    calendarButtonTitle?: string;
    showCalendarLabel?: string;
    hideCalendarLabel?: string;
    initialDate?: Date;
    extended?: boolean;
    initialShow?: boolean;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    inverted?: boolean;
    disableBeforeDate?: Date;
    disableAfterDate?: Date;
    onChange?: onChangeEventHandler;
    onFocus?: onFocusEventHandler;
    onBlur?: onBlurEventHandler;
}

export function DatePicker({
    label = "Velg dato",
    placeholder = "dd.mm.åååå",
    calendarButtonTitle,
    showCalendarLabel = calendarButtonTitle || "Åpne kalender",
    hideCalendarLabel = calendarButtonTitle || "Lukk kalender",
    initialDate,
    onChange,
    onBlur,
    onFocus,
    initialShow = false,
    className = "",
    forceCompact,
    inverted,
    disableBeforeDate,
    disableAfterDate,
    variant,
    helpLabel,
    errorLabel,
    ...calendarProps
}: Props) {
    if (calendarButtonTitle && process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: For better usability, please supply separate button titles for showing/hiding the calendar, using the showCalendarLabel and hideCalendarLabel props respectively. The calendarButtonTitle prop is deprecated and will be removed in a future update.",
        );
    }

    const [inputId] = useState(`jkl-datepicker-${nanoid(8)}`);
    const [supportLabelId] = useState(`jkl-support-label-${nanoid(8)}`);
    const [date, setDate] = useState(initialDate);
    const [calendarHidden, setCalendarHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState(initialDate ? formatDate(initialDate) : "");
    const componentClassName = classNames(
        "jkl-datepicker",
        {
            "jkl-datepicker--open": !calendarHidden,
            "jkl-datepicker--inverted": inverted,
        },
        className,
    );
    const inputWrapperClassName = classNames("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper", {
        "jkl-text-input--compact": forceCompact,
        "jkl-text-input--inverted": inverted,
    });
    const componentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [calendarRef] = useAnimatedHeight(!calendarHidden);

    useClickOutside(calendarRef, () => {
        !calendarHidden && setCalendarHidden(true);
    });
    useKeyListener(calendarRef, ["Escape"], () => {
        !calendarHidden && setCalendarHidden(true);
        inputRef.current && inputRef.current.focus();
    });

    useEffect(() => {
        disableAfterDate && disableAfterDate.setHours(23, 59, 59, 999);
        const now = new Date();

        if (disableAfterDate && now > disableAfterDate) {
            setDate(disableAfterDate);
        }
        if (disableBeforeDate && now < disableBeforeDate) {
            setDate(disableBeforeDate);
        }
    }, [disableBeforeDate, disableAfterDate]);

    const disableDate = useCallback(
        (date: Date) => {
            return (disableAfterDate && date > disableAfterDate) || (disableBeforeDate && date < disableBeforeDate);
        },
        [disableAfterDate, disableBeforeDate],
    );

    useEffect(() => {
        setDateString(initialDate ? formatDate(initialDate) : "");
        setDate(initialDate);
    }, [initialDate]);

    useEffect(() => {
        // if initialdate is outside scope, clear it out. this is to avoid a case in wizard forms
        // where the initialdate may be based on an invalid value earlier in the form state.
        if (initialDate && disableDate(initialDate)) {
            setDateString("");
            setDate(undefined);
        }
        // this check should only have effect at first render. this is to ensure a good user experience, where having
        // it on every change would clear out the field while the user is typing.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleCalendar = () => {
        const wasHidden = calendarHidden;
        setCalendarHidden(!calendarHidden);

        if (wasHidden) {
            const calendarEl = calendarRef.current;
            const button = calendarEl && (calendarEl.querySelector("[autofocus]") as HTMLButtonElement);
            button && setTimeout(() => button.focus(), 100);
        }
    };
    const toggleCalendarWithoutFocus = useCallback(() => setCalendarHidden(!calendarHidden), [calendarHidden]);

    useEffect(() => {
        const inputEl = inputRef.current;
        inputEl && inputEl.addEventListener("click", toggleCalendarWithoutFocus);
        return () => {
            inputEl && inputEl.removeEventListener("click", toggleCalendarWithoutFocus);
        };
    }, [toggleCalendarWithoutFocus]);

    const handleBlur = (e: FocusEvent) => {
        const nextFocusIsInside = componentRef.current && componentRef.current.contains(e.relatedTarget as Node);
        if (onBlur && !nextFocusIsInside) {
            onBlur(date, e);
        }
    };

    const handleFocus = (e: FocusEvent) => {
        const prevFocusIsInside = componentRef.current && componentRef.current.contains(e.relatedTarget as Node);
        if (onFocus && !prevFocusIsInside) {
            onFocus(date, e);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDateString = e.target.value;
        const newDate = parseDateString(newDateString);
        // Only set the date if it is a valid date
        if (newDate && dateHasChanged(date, newDate)) {
            setDate(newDate);
            if (onChange) {
                onChange(newDate, e);
            }
        } else if (newDateString === "") {
            setDate(undefined);
            if (onChange) {
                onChange(undefined, e);
            }
        }
        setDateString(newDateString);
    };

    function dateHasChanged(date: Date | undefined, newDate: Date) {
        return !date || !isSameDay(date, newDate);
    }

    function onClickCalendarDay(e: ChangeEvent<ChangeDate>) {
        const newDate = e.target.date;

        if (dateHasChanged(date, newDate)) {
            setDateString(formatDate(newDate));
            setDate(newDate);

            if (onChange) {
                onChange(newDate);
            }
        }

        setCalendarHidden(true);
        inputRef.current && inputRef.current.focus();
    }

    return (
        <div className={componentClassName} ref={componentRef}>
            <Label standAlone htmlFor={inputId} variant={variant}>
                {label}
            </Label>
            <div className={inputWrapperClassName}>
                <BaseInputField
                    ref={inputRef}
                    id={inputId}
                    describedBy={supportLabelId}
                    invalid={!!errorLabel}
                    className="jkl-datepicker__input jkl-text-input__input"
                    data-testid="jkl-datepicker__input"
                    value={dateString}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={placeholder}
                    width="11.5rem"
                />
                <IconButton
                    className="jkl-text-input__action-button"
                    iconType="calendar"
                    buttonTitle={calendarHidden ? showCalendarLabel : hideCalendarLabel}
                    onClick={toggleCalendar}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <div className="jkl-datepicker__calendar-wrapper">
                    <Calendar
                        currentDate={date}
                        onClickDate={onClickCalendarDay}
                        disableDate={disableDate}
                        hidden={calendarHidden}
                        inverted={inverted}
                        forceCompact={forceCompact}
                        ref={calendarRef}
                        {...calendarProps}
                    />
                </div>
            </div>
            <SupportLabel inverted={inverted} id={supportLabelId} helpLabel={helpLabel} errorLabel={errorLabel} />
        </div>
    );
}
