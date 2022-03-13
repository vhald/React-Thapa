import React, { useState } from 'react'
import "./styles.css"
import Menu from './menuAPI';
import MenuCard from './menuCard';

const Resturant = () => {
    // hooks should on top most portion 
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
    };

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item">Lunch</button>
                    <button className="btn-group__item">Hi Tea</button>
                    <button className="btn-group__item">Dinner</button>
                    <button className="btn-group__item">All</button>
                </div>
            </nav>


            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant