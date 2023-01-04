import React, { useState } from 'react';

const Home = () => {
    const [count,setCount] = useState(0);
    const number = 56;
    const increaseCount = () =>{
        setCount(count + 1)
    }
    return (
        <div>
           <button onClick={increaseCount}>click me</button><br />
           <h2>count : {count}</h2>
           <h3>My numbers : {number}</h3>
           <h2>double count : {count * 2}</h2>

        </div>
    );
};

export default Home;