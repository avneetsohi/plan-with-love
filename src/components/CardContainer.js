 import './CardContainer.css';
import Card from './Card';
import data from '../data';
import { useState } from 'react';

function CardContainer(){

    const [tours,setTours]=useState(data);

    function removeTour(id){
        const newTours=tours.filter((tour)=>tour.id!==id);
        setTours(newTours);
    }
    
    function refreshHandler(){
        setTours(data);
    }

    if(tours.length===0){
        return(
            <div className='refresh'>
                <h2>No Tours Left</h2>
                <button className='btn-white' onClick={refreshHandler}>Refresh</button>
            </div>
        );
    }

    // console.log(tours);
    return(
        <div className='cards'>
            {
                tours.map( (tour) => {
                    return <Card  {...tour} removeCard={removeTour}></Card>
                })
            }
        </div>
    );
}

export default CardContainer;