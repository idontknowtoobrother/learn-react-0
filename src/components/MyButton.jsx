import React from "react";

function MyButton() {

    function clicked(){
        alert('My Button clicked!')
    }
    
    return (
        <button onClick={clicked}>
            My Button
        </button>
    )
}

export default MyButton