import './Gym.css'
import GymCart from '../GymCart/GymCart';
import Category from '../Category/Category';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';

const Gym = () => {
    const [categories, setCategories] = useState([]);
    const [userCart, userSetCart] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleAddToCart = (categories) => {
        const newCart = [...userCart, categories];
        userSetCart(newCart);
        addToDb(categories.id);
    };

    return (
        <div className='gym-container'>
            <div className='category-container'>
                    {
                    categories.map(category => <Category
                        handleAddToCart={handleAddToCart}
                        category={category}
                        key={category.id}
                        ></Category>)
                    }
            </div>
            <div className='gym-cart'>
                <GymCart userCart={userCart}></GymCart>
           </div>
        </div>
    );
};

export default Gym;