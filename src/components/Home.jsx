import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t, i18n } = useTranslation();


    return (    
        <div className="home">
            <div className="welcome">
                <h1 className="h11">{t('Home.h1')}</h1>
                <p>{t('Home.p')}</p>
                <div className="btns">
                <button className="btn"><h1>Our Menu</h1></button>
                <button className="btn"><h1>Book a table</h1></button>
                </div>
            </div>
            <div className="main">
                <div className="left">
                    <h2>{t('Home.h2')}</h2>
                </div>

                <div className="right">
                    <h2>{t('Home.h2')}</h2>
                </div>
            </div>

        </div>
    )
}

export default Home;