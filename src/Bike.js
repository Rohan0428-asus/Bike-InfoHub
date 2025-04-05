import React from "react";

export default function Bike(props) {
    return(
        <div class="fun">
            <a href={props.link}><img src={props.image} class="pic"/></a>
            <h2>{props.name}</h2>
            <div class="func">
            <h4>{props.speed}</h4>
            <h4 class="line1">|</h4>
            <h4>{props.milage}</h4>
            <h4 class="line2">|</h4>
            <h4>{props.power}</h4>
            </div>
        </div>
    )
}