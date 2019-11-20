import React from "react";

const StarCard = props => {
    return (
        <div className="star-card">
            <h1>{props.name}</h1>
            <h2>by {props.manufacturer}</h2>
        </div>
    )
}
export default StarCard;