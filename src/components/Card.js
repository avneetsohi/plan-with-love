import './Card.css';
import { useState } from 'react';

function Card(props){

    
    const [readMore,setReadMore]=useState(false);

    const [description,setDescription]=useState(`${props.info.substring(0,200)}.... `);
    // const description=readMore?props.info:`${props.info.substring(0,200)}.... `;
    
    function readMoreHandler(){
        setReadMore(!readMore);
        if(readMore){
            setDescription(`${props.info.substring(0,200)}.... `);
        }
        else{
            setDescription(props.info);
        }
    }

    

    return (
        <div className='card'>
            <img src={props.image} className='city-image'></img>
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='city-price'>₹ {props.price}</h4>
                    <h4 className='city-name'>{props.name}</h4>
                </div>
                <p className='city-desc'>
                    {description}
                    <span className='read-more' onClick={readMoreHandler}>
                        {readMore?"Show Less":"Read More"}
                    </span>
                </p>
            </div>
            <button className='btn' onClick={()=>props.removeCard(props.id)}>Not Interested</button>
        </div>
    );
}

export default Card;