import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {incrementCount, decrementCount} from "./../../redux/counter/counter.actions";
import Button from "../button/button.component";
import "./counter.styles.scss";


const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    
    return (
    <div className="counter-container">
        <h1 className="count">{count}</h1>
        <Button onClick={() => dispatch(decrementCount())}>-</Button>
        <Button onClick={() => dispatch(incrementCount())}>+</Button>
        
    </div>
)};

export default Counter;