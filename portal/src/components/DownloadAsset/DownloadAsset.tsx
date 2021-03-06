import React from "react";
import downloadjs from "downloadjs";
import classNames from "classnames";
import { withPrefix } from "gatsby";

import "./DownloadAsset.scss";

interface Props {
    asset: string;
    name: string;
    type: string;
    darkbg?: boolean;
}

export function DownloadAsset({ asset = "", name, type, darkbg = false }: Props) {
    const componentClassName = classNames({
        "jkl-portal-downloadasset": true,
        "jkl-portal-downloadasset--dark-bg": darkbg,
    });
    const textClassName = classNames({
        "jkl-portal-downloadasset__name": true,
        "jkl-portal-downloadasset__name--dark": darkbg,
    });
    const clickDownload = (event: React.MouseEvent) => {
        event.preventDefault();
        // See common mime types to extend https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        let mimeType = "";
        switch (type) {
            case "svg":
                mimeType = "image/svg+xml";
                break;
            default:
                break;
        }
        if (confirm("Vil du laste ned " + name + "?")) {
            downloadjs(asset, name, mimeType);
        }
    };
    return (
        <div className={componentClassName}>
            <button className="jkl-portal-downloadasset__button" onClick={clickDownload}>
                <img className="jkl-portal-downloadasset__image" src={withPrefix(asset)} alt={"Fil " + name} />
                <span className={textClassName}>{name}</span>
            </button>
        </div>
    );
}
