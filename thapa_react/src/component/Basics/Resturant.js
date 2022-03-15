import React, { useState } from 'react'
import "./styles.css"
import Menu from './menuAPI';
import MenuCard from './menuCard';

const uniqueList = Menu.map((curElem) => {
    return curElem.category;
});
console.log(uniqueList);

const Resturant = () => {
    // hooks should on top most portion 
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        // filter method is same as map function.
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        // 1st it will filter out the category then store into variable nd saved in updated functn
        setMenuData(updatedList);
    };

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    {/* whenever you are giving arguement in a function, better to use arrow fn |^ */}
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}>Hi Tea</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav>

            {/* // below is Prop */}
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant