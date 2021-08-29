import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ handClick }) => {

  const { t, i18n } = useTranslation();

    return (
      <div className="header-com">
        <div className="header-div">
          <div className="allDiv">
            <NavLink className="nav" to="/home"><h1 className="h1">{t('Header.home')}</h1></NavLink>
          </div>
          <div className="allDiv">
              <NavLink className="nav" to="/menu"><h1 className="h1">{t('Header.menu')}</h1></NavLink>
          </div>
          <div className="allDiv">
              <NavLink className="nav" to="/reservation"><h1 className="h1">{t('Header.reservation')}</h1></NavLink>
          </div>
          <div className="allDiv">
              <NavLink className="nav" to="/about"><h1 className="h1">{t('Header.about')}</h1></NavLink>
          </div>
          <div className="allDiv">
              <NavLink className="nav" to="/login"><h1 className="h1">{t('Header.contact')}</h1></NavLink>
          </div>
        </div>
      <div className="btn-trans-div">
          <button className="trans-btn" onClick={() => handClick('en')}>
            <p>en</p>
          </button>
          <button className="trans-btn" onClick={() => handClick('uz')}>
          <p>uz</p>
          </button>
          <button className="trans-btn" onClick={() => handClick('ru')}>
          <p>ru</p>
          </button>
        </div>
      </div>
    )
  } 
  
  export default Header;
  