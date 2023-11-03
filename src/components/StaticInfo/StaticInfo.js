import React from 'react';
import './StaticInfo.css'
import userImg from '../../design-file/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const StaticInfo = () => {
    return (
        <div>
            <div className='static-info'>
                <div className='user-info'>
                    <img className='user-img' src={userImg} alt="" />
                    <div className='user-NL'>
                        <p className='user-name'>Mr : Faisal Hossen</p>
                        <p><span className='location' style={{ marginRight:10}}>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>Rajshahi Bangladesh</p>
                    </div>
                </div>
                <div className='details-info'>
                    <div className='weight'>
                        <h3>58<small>kg</small> </h3>
                        <p>Weight</p>
                    </div>
                    <div className='height'>
                        <h3>5.5</h3>
                        <p>Height</p>
                    </div>
                    <div className='age'>
                        <h3>20<small>yrs</small> </h3>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticInfo;