/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { FaBookOpen } from 'react-icons/fa';




const Card = ({ card,handleBtn }) => {
    // console.log(card);
    



    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={card.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">{card.title}</h2>
                    <p>{card.description}</p>
                    <div className='flex gap-2 items-center'>
                        <p>$ Price: {card.price}</p>
                        <span><FaBookOpen/></span>
                        <p> Credit: {card.credit} hr</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleBtn(card)} className="px-10 w-full text-white text-xm font-semibold py-2 bg-blue-600 rounded-lg">Buy Now</button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {

};

export default Card;