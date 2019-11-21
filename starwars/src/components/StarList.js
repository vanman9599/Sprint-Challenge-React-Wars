import React, { useEffect, useState } from "react";
import StarCard from './StarCard.js';
import axios from 'axios';

export default function StarList(){
    const [stars, setStars] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/starships')
        .then(res => {
            console.log(res.data.results)
            setStars(res.data.results)
        })
        .catch(error => {
            console.log("sorry no dogs", error)
        })
    }, [])

    return(
        <div className="container">
            {stars.map((ship, index)=> {
                return <StarCard key={index} name={ship.name}  manufacturer={ship.manufacturer}/>
            })}
        </div>
    )
}