import './GymCart.css'
import StaticInfo from '../StaticInfo/StaticInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GymCart = (props) => {
    const { userCart } = props;

    let time = 0;
    for (const category of userCart) {
        time = time + category.Time;
    };

    const notify = () => toast ("Finished Gymnastics");

    return (
        <div className='cart-container'>
            <StaticInfo></StaticInfo>
            <div className='static-info'>
                <h4 className='b-title'>Add A Break</h4>
                <div className='details-info'>
                    <div className='second'>
                        <h5>20 <small>s</small> </h5>
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
                        <h4>Exercise time </h4>
                        <p>{time} seconds</p>
                    </div>
                    <div style={{marginTop:30}} className='exr-time'>
                        <h4>Break time</h4>
                        <p>15 seconds</p>
                    </div>
                </div>
            </div>
                <div className='btn-div'>
                <button onClick={notify} className='act-btn'>Activity Completed</button>
                <ToastContainer></ToastContainer>
                </div>
        </div>
    );
};

export default GymCart;