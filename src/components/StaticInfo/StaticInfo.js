import React from 'react';
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
                        <p className='user-name'>MD : Faisal Hossen</p>
                        <p><span style={{ marginRight:10 }}>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>Rajshahi Bangladesh</p>
                    </div>
                </div>
                <div className='details-info'>
                    <div className='weight'>
                        <h2>58<small>kg</small> </h2>
                        <p>Weight</p>
                    </div>
                    <div className='height'>
                        <h2>5.5</h2>
                        <p>Height</p>
                    </div>
                    <div className='age'>
                        <h2>20<small>yrs</small> </h2>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticInfo;