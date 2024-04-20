import React from 'react';
import Gallery from '../components/gallery/Gallery';
import ManagerSummary from '../components/managerSummary/ManagerSummary';
import './SummaryStyle.css'
import PersonalInfo from '../components/personalInfo/PersonalInfo';
import Extras from '../components/extras/Extras';

export default function Summary() {
    return (
        <div className='body-container'>
            <Gallery />
            <ManagerSummary/>
            <PersonalInfo/>
            <Extras/>
        </div>
    )
}