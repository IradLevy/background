import React from "react";
import './ExtraButtonStyle.css'


export default function ExtraButton({onClick, title, description}) {
    return (
        <div className="extra-button-container" onClick={onClick}>
            <div className="extra-button-text">
                <strong>{title}</strong>
                <span className="button-description">{description}</span>
            </div>
            <p className="plus-icon">+</p>
        </div>
    )
}