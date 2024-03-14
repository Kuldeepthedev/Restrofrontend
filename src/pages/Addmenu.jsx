import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import { addProductAction } from '../Actions/addProductAction';

function Addmenu() {
    const categories = ['Veg Starter', 'Non Veg Starter', 'Soup'];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [eta, setETA] = useState('');

    const dispatch = useDispatch();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSaveMenu = () => {
        if (selectedCategory && itemName && eta) {
            dispatch(addProductAction(selectedCategory, itemName, eta));
            setSelectedCategory('');
            setItemName('');
            setETA('');
        } else {
            console.log('Please select category, item name, and ETA.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="add_menu">
                <h3 className='heading'>Menu Details</h3>
                <div className="adding_menu">
                    <h3>Add Your Menu</h3>
                    <div className="category_add">
                        <div>
                            <label htmlFor="">Category</label>
                            <select
                                name="category"
                                id="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select a Category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Item Name</label>
                            <input
                                type="text"
                                placeholder='Enter Item Name'
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                        <div className="ETA">
                            <label htmlFor="">ETA</label>
                            <input
                                type="number"
                                placeholder='Enter ETA'
                                value={eta}
                                onChange={(e) => setETA(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleSaveMenu}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addmenu;
