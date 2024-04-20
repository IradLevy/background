import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Header.css'
import logo from '../assests/logo.png'
import downloadLogo from '../assests/downloadLogo.png'

export default function Header() {
  return (
    <div className="header-container">
      <nav className="header">
        <div className="menu">
          <NavLink className="menu-item" to="summary">יציאה</NavLink>
          <NavLink className="menu-item" to="myReports">הדוחות שלי</NavLink>
          <NavLink className="menu-item" to="orderReport">הזמנת דוח</NavLink>
        </div>
        <div className="image-logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="profile">
        <i className="arrow down"></i>
            <span className="name">
               שלום רועי בסון
            </span>
            <div className="circle">
                ר.ב
            </div>
        </div>
        
      </nav>

      <nav className="second-nav bottom-line">
        <Link to="/">
            <img
            src={downloadLogo}
            alt="downloadLogo"
            />
        </Link>
          <NavLink className="second-nav-item" to="socialNetworks"><p>רשתות חברתיות</p></NavLink>
          <NavLink className="second-nav-item" to="networkMentions"><p>אזכורים ברשת</p></NavLink>
          <NavLink className="second-nav-item" to="legalStatus"><p>סטטוס משפטי</p></NavLink>
          <NavLink className="second-nav-item" to="dataProviders"><p>מאגרי מידע</p></NavLink>
          <NavLink className="second-nav-item" to="business"><p>עסקי</p></NavLink>
          <NavLink className="second-nav-item" to="summary"><p>סיכום</p></NavLink>
      </nav>
      </div>
  );
}
