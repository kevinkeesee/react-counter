import React, {useReducer} from 'react';
import CountContext from './countContext';
import CountReducer from './countReducer';
import {
    
} from '../types';


const CountState = props => {
    const initialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(CountReducer, initialState);

    // Functions go here

    return <CountContext.Provider
        value={{
            count: state.count
        }}>
        {props.children}
    </CountContext.Provider>
}

export default CountState;