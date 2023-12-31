import React, {useState} from "react";

type OnOfPropsType = {
    on: boolean
    onChange: (on: boolean)=>void
}

export function OnOf(props: OnOfPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={ ()=> props.onChange(true)}>On</div>
            <div style={offStyle} onClick={()=> props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


// function Button(props: any) {
//     if (props.pushh === true) {
//         return (
//             <span>
//             <button><b>ON</b></button>
//             <button>OFF</button>
//                 <button>GREEN</button>
//         </span>
//         )
//     } else {
//         return (
//             <span>
//             <button>ON</button>
//             <button><b>OFF</b></button>
//             <button>RED</button>
//         </span>
//         )
//     }
// }
