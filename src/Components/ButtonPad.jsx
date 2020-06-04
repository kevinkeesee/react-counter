import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonPad = ({incrementOne, incrementTwo, incrementFive, incrementTen,
     decrementOne, decrementTwo, decrementFive, decrementTen,
     resetCount}) => {

    return (
        <div>
            <Button variant='primary' onClick={incrementTen}>+10</Button> {' '}
            <Button variant='primary' onClick={incrementFive}>+5</Button>{' '}
            <Button variant='primary' onClick={incrementTwo}>+2</Button>{' '}
            <Button variant='primary' onClick={incrementOne}>+1</Button>{' '}
            <Button variant='outline-secondary' onClick={resetCount}>Reset</Button>{' '}
            <Button variant='secondary' onClick={decrementOne}>-1</Button>{' '}
            <Button variant='secondary' onClick={decrementTwo}>-2</Button>{' '}
            <Button variant='secondary' onClick={decrementFive}>-5</Button>{' '}
            <Button variant='secondary' onClick={decrementTen}>-10</Button>{' '}
        </div>
    )
}

export default ButtonPad;