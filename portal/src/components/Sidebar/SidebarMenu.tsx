import React, { useState, ChangeEvent } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { useDarkMode } from "../../contexts/themeContext";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { Link } from "@fremtind/jkl-core";
import { DocumentationPageInfo } from "../Header/useNavigationLinks";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";

interface Props {
    links: DocumentationPageInfo[];
    currentSection: string;
    groups: string[];
    showGroups: boolean;
}

const listItemInitial = { x: -5, opacity: 0 };
const listItemAnimate = { x: 0, opacity: 1, transition: { duration: 0.2 } };
const listItemExit = { x: 5, opacity: 0, transition: { duration: 0.2 } };
const allComponents = "alle";

export const SidebarMenu: React.FC<Props> = ({ links, currentSection, groups, showGroups }) => {
    const isDarkMode = useDarkMode();
    const [filter, setFilter] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(allComponents);

    const controls = useAnimation();

    React.useEffect(() => {
        (async () => {
            await controls.start({ x: 0, opacity: 0, transition: { duration: 0 } });
            await controls.start({ x: -10, opacity: 0, transition: { duration: 0.2 } });
            await controls.start({ x: 0, opacity: 1, transition: { duration: 0.2 } });
        })();
    }, [currentSection, controls]);

    function filterLinks(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }
    const filteredLinks = links.filter((link) => link.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key="sidebar-menu"
        >
            <TextInput
                variant="small"
                forceCompact
                label="Filtrér"
                value={filter}
                inverted={isDarkMode}
                onChange={filterLinks}
                action={{ icon: "clear", label: "Nullstill filter", onClick: () => setFilter("") }}
                className="jkl-portal-sidebar-menu__filter"
                data-testid="sidebar-filter"
            />
            {showGroups && (
                <RadioButtons
                    className="jkl-portal-sidebar-menu__meta"
                    legend="Vis"
                    name="filter-radio"
                    choices={[allComponents, ...groups]}
                    selectedValue={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    variant={"small"}
                    forceCompact
                    inline
                    inverted={isDarkMode}
                />
            )}
            <motion.ul animate={controls} className="jkl-portal-sidebar-menu__items">
                {filteredLinks.length === 0 ? (
                    <motion.li
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                        exit={{ y: -40, opacity: 0, transition: { duration: 0.2 } }}
                        className="jkl-portal-sidebar-menu-item"
                        key={`li-none`}
                    >
                        <p className="jkl-small">
                            {filter && (
                                <>
                                    <span style={{ fontWeight: "bold" }}>{filter} </span>er ikke i biblioteket <br />
                                    <br />
                                </>
                            )}
                            <Link
                                external
                                href={`https://github.com/fremtind/jokul/issues?q=is%3Aissue+is%3Aopen+${filter}`}
                            >
                                Sjekk åpne issues på github
                            </Link>
                        </p>
                    </motion.li>
                ) : (
                    <AnimatePresence>
                        {filteredLinks.map((item: DocumentationPageInfo) => {
                            if (!showGroups || selectedGroup === allComponents || selectedGroup === item.group) {
                                return (
                                    <motion.li
                                        initial={listItemInitial}
                                        animate={listItemAnimate}
                                        exit={listItemExit}
                                        className="jkl-portal-sidebar-menu-item"
                                        key={`li-${item.title}`}
                                    >
                                        <SidebarMenuItem key={item.title} path={item.path} title={item.title} />
                                    </motion.li>
                                );
                            }
                            return null;
                        })}
                    </AnimatePresence>
                )}
            </motion.ul>
        </motion.div>
    );
};
