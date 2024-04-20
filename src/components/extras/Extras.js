import React from "react";
import './ExtrasStyle.css'
import extrasLogo from '../../assests/extras-logo.png'
import ExtraButton from "../extraButton/ExtraButton";

export default function Extras() {

    const handleClick = () => {
        console.log("button clicked")
        // code for clicking the button
    }

    return (
        <div className="card extras-card">
            <div className="extras-title">
                <img className="extras-logo" src={extrasLogo} alt="profile" />
                <strong className="extras-text">על מנת לשפר את ניתוח הדוח מומלץ להוסיף את הפרטים הבאים</strong>
            </div>
            <div className="extras-buttons-container">
                <ExtraButton
                    onClick={handleClick} 
                    title={"מאגרי סנקציות"} 
                    description={"מומלץ להוסיף שם פרטי ושם משפחה באנגלית"}
                />
                <ExtraButton
                    onClick={handleClick}
                    title={"מאגרי מקלט מס"}
                    description={"לא סופק שם באנגלית"}
                />
                <ExtraButton
                    onClick={handleClick}
                    title={"מאגרי מבוקשים בינלאומיים"}
                    description={"לא סופק שם באנגלית"}
                />
            </div>
        </div>
    )
}