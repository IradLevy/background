import React, { useState, useEffect } from "react";
import './ManagerStyle.css'
import summary from './managerSummary.json'

export default function ManagerSummary() {
    const [sum, setSum] = useState(summary.summary)
    const [scannedInfo, setScannedInfo] = useState("")

    const insertScannedInfo = () => {
        if (sum.fieldsChecked.length >= 4) {
            setScannedInfo(sum.fieldsChecked.slice(0, 3).join(", ") + " ו" + sum.fieldsChecked[3] + " ועוד.")
        } else {
            setScannedInfo(sum.fieldsChecked.slice(0, -1).join(", ") + " ו" + sum.fieldsChecked[-1] + ".")
        }
    }

    useEffect(() => {
        insertScannedInfo()
    }, []);

    return (
        <div className='summary-card card'>
            <div className="summary-title-container">
                <h2>סיכום מנהלים</h2>
                <p className="findings-text">המערכת סרקה {sum.dataProvidersNum} מקורות מידע שונים בתחומים של {scannedInfo}</p>
                <p className="findings-details">להלן הפירוט של הממצאים העיקריים:</p>
            </div>
            <div className="findings-card">
                <ol className="findings-list">
                    {sum.findings.map((finding, index) => (
                        <li key={index}>
                            {finding}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}