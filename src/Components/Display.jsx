import React, {useContext} from 'react';
import CountContext from '../context/count/countContext';

const Display = ({count}) => {
    const countContext = useContext(CountContext);

    return (
        <section className="display">
            <h2>{count}</h2>
        </section>
    )
}

export default Display;