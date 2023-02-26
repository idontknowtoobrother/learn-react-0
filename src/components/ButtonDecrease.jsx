import React, { useState } from "react";

function ButtonDecrease(){
    
    const [count, setCount] = useState(100);
    
    function decreaseCount(){
        setCount(count-1)
    } 

    return (
        <button onClick={decreaseCount}>
            Decrease {count}s
        </button>
    )
}

export default ButtonDecrease