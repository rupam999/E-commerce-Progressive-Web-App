import React, {useState} from 'react';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopHomeDealsOfTheDay from '../Components/DesktopHomeDealsOfTheDay';
import DesktopHomeSuggestedForYou from '../Components/DesktopHomeSuggestedForYou';
import DesktopNavbar from '../Components/DesktopNavbar';
import DesktopSlider from '../Components/DesktopSlider';
import '../css/HomeScreenStyle.css';

export const DesktopHomeScreen = () => {
    return(
        <div className="homeScreen">
            <DesktopNavbar />
            <div style={{backgroundColor: '#F1F3F6'}}>
                <DesktopSlider />
                <DesktopHomeDealsOfTheDay />
                <DesktopHomeSuggestedForYou />
                <DesktopFooter />
            </div>
        </div>
    );
}