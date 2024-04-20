import { useState } from "react";
import person from "./personal_info.json"
import './PersonalInfoStyle.css'
import mailLogo from '../../assests/mail_logo.png'
import phoneLogo from '../../assests/phone-logo.png'
import linkedInLogo from '../../assests/linkedin-logo.png'
import LogoInfoCouple from "../logoInfoCouple/LogoInfoCouple";
import instagramLogo from '../../assests/instagram-logo.png'
import tiktokLogo from '../../assests/tiktok-logo.png'
import twitterLogo from '../../assests/twitter-logo.png'
import youtubeLogo from '../../assests/youtube-logo.png'
import nicknameLogo from '../../assests/nickname-logo.png'
import educationLogo from '../../assests/education-logo.png'

export default function PersonalInfo() {
    const [per, setPer] = useState(person.person);

    return (
        <div className="card personal-info-card">
            <div className="profile-pic-container">
                <img className="profile-img" src={per.profile_pic} alt="profile" />
            </div>
            <div className="person-title">
                <h2 className="person-name">{per.name}</h2>
                <p>{per.Job} at {per.Company}</p>
                <p>{per.description}</p>
                <p className="id-country">ת.ז. {per.id_number}&nbsp; | &nbsp;{per.country}</p>
            </div>
            <div className="check-container">
                <p>מטרת הדוח: <strong>{per.report_purpose || "לא סופק"}</strong></p>
                <p>מיקוד בדיקה: <strong>{per.focus || "לא סופק"}</strong></p>
            </div>
            <div className="details-container">
                <div className="icons-info-container line-between">
                    {per.mail_addresses.map((address, index) => (
                        <LogoInfoCouple key={index} text={address} logo={mailLogo} isLink={false}/>
                    ))}
                    {per.phone_numbers.map((num, index) => (
                        <LogoInfoCouple key={index} text={num} logo={phoneLogo} isLink={false}/>
                    ))}
                </div>
                <div className="icons-info-container line-between">
                    {per.linkedInProfiles.length > 0 ? (per.linkedInProfiles.map((profile, index) => (
                        <LogoInfoCouple key={index} text={"לינקאין"} logo={linkedInLogo} isLink={true} url={profile}/>
                    ))): (
                        <LogoInfoCouple text={"לינקאין"} logo={linkedInLogo} isLink={true} url={null}/>
                    )}
                    {per.facebookProfiles.length > 0 ? per.facebookProfiles.map((profile, index) => (
                        <LogoInfoCouple key={index} text={"פייסבוק"} logo={tiktokLogo} isLink={true} url={profile}/>
                    )): (
                        <LogoInfoCouple text={"פייסבוק"} logo={linkedInLogo} isLink={true} url={null}/>
                    )}
                    {per.instagramProfiles.length > 0 ? (per.instagramProfiles.map((profile, index) => (
                        <LogoInfoCouple key={index} text={"אינסטגרם"} logo={instagramLogo} isLink={true} url={profile}/>
                    ))): (
                        <LogoInfoCouple text={"אינסטגרם"} logo={linkedInLogo} isLink={true} url={null}/>
                    )}
                    {per.youtubeProfiles.length > 0 ? (per.youtubeProfiles.map((profile, index) => (
                        <LogoInfoCouple key={index} text={"יוטיוב"} logo={youtubeLogo} isLink={true} url={profile}/>
                    ))): (
                        <LogoInfoCouple text={"יוטיוב"} logo={linkedInLogo} isLink={true} url={null}/>
                    )}
                    {per.twitterProfiles.length > 0 ? (per.twitterProfiles.map((profile, index) => (
                        <LogoInfoCouple key={index} text={"טוויטר"} logo={twitterLogo} isLink={true} url={profile}/>
                    ))): (
                        <LogoInfoCouple text={"טוויטר"} logo={linkedInLogo} isLink={true} url={null}/>
                    )}
                </div>
                <div className="icons-info-container">
                    <div className="nickname-education-container">
                        <div className="nickname-container">
                            <span>כינויים:</span>
                            <span className="nickname-education"><strong>{per.nicknames.join(" ,")}</strong></span>
                        </div>
                        <div className="logo-container">
                            <img src={nicknameLogo} alt="nicknames" />
                        </div>
                    </div>
                    <div className="nickname-education-container">
                        <div className="nickname-container">
                            <span>השכלה:</span>
                            <span className="nickname-education"><strong>{per.education.join(" ,")}</strong></span>
                        </div>
                        <div className="logo-container">
                            <img src={educationLogo} alt="nicknames" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}