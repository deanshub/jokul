import React, { ImgHTMLAttributes, useState, useRef } from "react";
import { withPrefix } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import { useKeyListener } from "@fremtind/jkl-react-hooks";

export const PortalImg: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src }) => {
    const [isFullscreen, setFullscreen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useKeyListener(ref, "Escape", () => setFullscreen(false));

    const toggleFullscreen = () => setFullscreen(!isFullscreen);

    let imgSrc = src;
    if (src?.startsWith("/")) {
        imgSrc = withPrefix(src);
    }

    return (
        <>
            <BlurredBackground blur={isFullscreen} />
            <motion.button
                ref={ref}
                layout
                onClick={toggleFullscreen}
                className={`jkl-portal-image ${isFullscreen ? "jkl-portal-image--fullscreen" : "jkl-portal-paragraph"}`}
            >
                <Image imgSrc={imgSrc} />
                <div className="jkl-small">Klikk for å se større</div>
            </motion.button>
            {isFullscreen && (
                <button aria-hidden className="jkl-portal-image jkl-portal-paragraph">
                    <Image imgSrc={imgSrc} />
                    <div className="jkl-small">&nbsp;</div>
                </button>
            )}
        </>
    );
};

function Image({ imgSrc }: { imgSrc?: string }) {
    return <motion.img layout className="jkl-portal-image__img" src={imgSrc} alt="illustrasjon" />;
}

function BlurredBackground({ blur }: { blur: boolean }) {
    return (
        <AnimatePresence>
            {blur && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    className="portal-bg-blur"
                />
            )}
        </AnimatePresence>
    );
}