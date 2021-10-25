import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import AnimatedPieHooks from './AnimatedPieHooks.js';

function Pie() {
    const generateData = (value, length = 3) =>
        d3.range(length).map((item, index) => ({
            date: index,
            value:
                value === null || value === undefined
                    ? Math.floor(Math.random() * 100)
                    : value,
        }));

    const [data, setData] = useState(generateData(0));
    const changeData = () => {
        setData(generateData());
    };

    useEffect(() => {
        setData(generateData());
    }, []);

    return (
        <div className="d3">
            <div>
                <button onClick={changeData}>Transform</button>
            </div>

            <div>
                <AnimatedPieHooks
                    data={data}
                    width={200}
                    height={200}
                    innerRadius={60}
                    outerRadius={100}
                />
            </div>
        </div>
    );
}

export default Pie;
