import React, { useState } from 'react';
import '../App.scss';


const FunctionComponent = () => {

    const [count, setCount] = useState(0)
    return (
        <>
            <div className="container">
                <h1 className="container-heading" >Counting By Function Component</h1>
                <button onClick={() => setCount(count + 1)}><span>Increase</span></button>
                <p className="couting"> Is counting {count}</p>
                <button onClick={() => setCount(count - 1)}><span>Decrease</span></button>
            </div>

        </>
    )
}

export default FunctionComponent