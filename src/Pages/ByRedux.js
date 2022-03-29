import React from 'react';
import '../App.scss'
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../actions/actions'


function ByRedux() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <>
            <div className="container">
                <h1 className="container-heading" >Counting By useReduce</h1>
                <button onClick={handleIncrement}><span>Increase</span></button>
                <p className="couting"> Is counting {count}</p>
                <button onClick={handleDecrement}><span>Decrease</span></button>
            </div>

        </>
    )
}

export default ByRedux