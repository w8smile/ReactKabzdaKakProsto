import React from "react";

type OnOfPropsType = {
    push: boolean
}

export function OnOf(props: OnOfPropsType) {
    return (
        <div>
            <Button pushh={props.push}/>
        </div>
    )
}


function Button(props: any) {
    if (props.pushh === true) {
        return (
            <span>
            <button><b>ON</b></button>
            <button>OFF</button>
                <button>GREEN</button>
        </span>
        )
    } else {
        return (
            <span>
            <button>ON</button>
            <button><b>OFF</b></button>
            <button>RED</button>
        </span>
        )
    }
}
