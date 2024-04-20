import React from "react";
import './logoInfoStyle.css'

export default function LogoInfoCouple({text, logo, isLink, url}) {

    const content = () => {
        if (isLink && url) {
            return (<a href={url}>{text}</a>)
        } else if (isLink && !url) {
            return(<p>{text} - לא נמצא</p>)
        } else {
            return (<p>{text}</p>)
        }
    }

    return (
        <div className="icons-info">
            {content()}
            <img src={logo} alt="phone" />
        </div>
    )
}