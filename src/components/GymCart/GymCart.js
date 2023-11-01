import React from 'react';
import './GymCart.css'
import StaticInfo from '../StaticInfo/StaticInfo';

const GymCart = () => {
    return (
        <div className='cart-container'>
            <StaticInfo></StaticInfo>
            <div className='static-info'>
                <h4 className='b-title'>Add A Break</h4>
                <div className='details-info'>
                    <div className='second'>
                        <h5>20<small>s</small> </h5>
                    </div>
                    <div className='second'>
                        <h5>60<small>s</small> </h5>
                    </div>
                    <div className='second'>
                        <h5>80<small>s</small> </h5>
                    </div>
                    <div className='second'>
                        <h5>40<small>s</small> </h5>
                    </div>
                </div>
            </div>
            <div className='static-info'>
                <h4 className='b-title'>Exercise Details</h4>
                <div className='details-infoo'>
                    <div className='exr-time'>
                        <h3>Exercise time </h3>
                        <p>200 seconds</p>
                    </div>
                    <div style={{marginTop:30}} className='exr-time'>
                        <h3>Break time</h3>
                        <p>15 seconds</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='act-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default GymCart;