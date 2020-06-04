import React, {useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const incrementOne = () => {
        setCount(count + 1);
    }

    const incrementTwo = () => {
        setCount(count + 2);
    }

    const incrementFive = () => {
        setCount(count + 5);
    }

    const incrementTen = () => {
        setCount(count + 10);
    }

    const decrementOne = () => {
        setCount(count - 1);
    }

    const decrementTwo = () => {
        setCount(count - 2);
    }

    const decrementFive = () => {
        setCount(count - 5);
    }

    const decrementTen = () => {
        setCount(count - 10);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="counter">
            <Display count = {count}/>
            <ButtonPad incrementOne = {incrementOne} incrementTwo = {incrementTwo} incrementFive = {incrementFive} incrementTen = {incrementTen}
            decrementOne = {decrementOne} decrementTwo = {decrementTwo} decrementFive = {decrementFive} decrementTen = {decrementTen}
            resetCount = {resetCount} />
        </div>
    )
}

export default Counter;