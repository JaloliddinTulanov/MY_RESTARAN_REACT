import React, {useState} from 'react'
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './Menu';
import Reservation from './components/Reservation';
import Login from './components/Login';
import items from './data';
import {BrowserRouter, Route} from "react-router-dom";

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {

  const { t, i18n } = useTranslation();

  function handClick(lang) {
    i18n.changeLanguage(lang);
  };

  const[menuItems, setMenuItems] = useState(items);
  const[categories, setCategories] = useState(allCategories);

    const filterItems = (category)=>  {
      if(category === "all"){
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems);
  }


  return (
    <BrowserRouter>
      <div className="flex">
        <Header handClick={handClick}/>
        <div className="router">  
          <Route path='/home' render={() => <Home />} />
          <Route path='/about' render={() => <About />}/>
          <Route path='/reservation' render={() => <Reservation />}/>
          <Route path='/menu' render={() => <Menu categories={categories} filterItems={filterItems}  items={menuItems}/>}/>
          <Route path='/login' render={() => <Login />}/>
        </div>
      </div>
    </BrowserRouter>

  )
} 

export default App;
