import React, { useState } from "react";

function ButtonIncrease(){

    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count+1)
    }

    return (
        <button onClick={increaseCount}>
            Increase {count}s
        </button>
    )
}

export default ButtonIncrease;