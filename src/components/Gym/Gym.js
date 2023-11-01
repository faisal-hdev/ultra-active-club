import './Gym.css'
import GymCart from '../GymCart/GymCart';
import Category from '../Category/Category';
import React, { useEffect, useState } from 'react';

const Gym = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return (
        <div className='gym-container'>
            <div className='category-container'>
                    {
                        categories.map(category => <Category
                            category={category}
                            key={category.id}
                        ></Category>)
                    }
            </div>
            <div className='gym-cart'>
                <GymCart></GymCart>
           </div>
        </div>
    );
};

export default Gym;