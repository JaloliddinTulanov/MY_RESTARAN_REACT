import React from 'react';
import Categories from './Categories';
import { useTranslation } from 'react-i18next';




const Menu = ({ items, categories, filterItems }) => {

    const { t, i18n } = useTranslation();

  return (
      <div class>
    <div className="clr">
        <Categories  categories={categories} filterItems={filterItems}/>
    </div>
    <div className="section-center">
        { items.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;
            const change = () => {
                console.log(id, title)
            }
            return(
                <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo"/>
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price"> {price} </h4>
                        </header>
                        <p className="item-text"> {desc} </p>
                        
                    </div>
                    
                </article>
            )
        }) }
    </div>
    </div>
  )
  
};

export default Menu;