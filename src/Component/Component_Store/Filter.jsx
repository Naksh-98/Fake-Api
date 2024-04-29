import React, { useEffect, useState } from 'react';
import '../css/Filter.css';
import data from '../Data/Data';

const Filter = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        setData(data);
    }, []);

    return (
        <div className='filter'>
            <h2>{Data.length} Items</h2>
            <h2>hide filter</h2>
            <h2>Recommended</h2>
        </div>
    );
}

export default Filter;
