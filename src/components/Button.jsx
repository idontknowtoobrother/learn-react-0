import React from "react";

function Button({explain, handle}){
    return (
        <button onClick={handle}>
            {explain}
        </button>
    )
}

export default Button