import React, {useState} from "react";

type OnOfPropsType = {
    // push: boolean
    onChange: (on: boolean) => void
}

export function UncontrolledOnOf(props: OnOfPropsType) {
    let [on, setOn] = useState(true)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked =() => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>Off
            </div>
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
