import React from "react";
import classNames from "classnames";

interface Props {
    textDescription: string;
    negative?: boolean;
    inline?: boolean;
    className?: string;
    dataTestAutoId?: string;
}
export const Loader = ({
    textDescription,
    negative = false,
    inline = false,
    className,
    dataTestAutoId = "jkl-loader",
}: Props) => {
    const componentClassName = classNames("jkl-loader", className, {
        "jkl-loader--negative": negative,
        "jkl-loader--inline": inline,
    });

    return (
        <span
            className={componentClassName}
            data-testid="jkl-loader"
            data-testautoid={dataTestAutoId}
            title={textDescription}
            aria-label={textDescription}
            role="alert"
            aria-busy="true"
        >
            <span className="jkl-loader__dot jkl-loader__dot--left" />
            <span className="jkl-loader__dot jkl-loader__dot--middle" />
            <span className="jkl-loader__dot jkl-loader__dot--right" />
        </span>
    );
};
