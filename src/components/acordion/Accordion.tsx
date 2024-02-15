import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () =>void
    names: NamesType []
    onClick: (value: any)=> void
}

type NamesType = {
    title: string
    value: any
}


export function Accordion(props: AccordionPropsType) {
        return <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody names={props.names} onClick={props.onClick}/> }


        </div>
    }



type AccordionTitlePropsType = {
    title: string
    onChange: () =>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyType = {
    names: NamesType []
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            {props.names.map((el, index)=><li key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</li>)}
        </div>
    )
}

export default Accordion