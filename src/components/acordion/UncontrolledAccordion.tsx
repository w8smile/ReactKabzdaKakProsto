import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
export function UncontrolledAccordion(props: AccordionPropsType) {
    let[collapsed, setCollapsed] = useState(false)
        return <div>
            <AccordionTitle title={props.titleValue} setCollapsed={ ()=> {setCollapsed(true)}}/>
            {!collapsed && <AccordionBody/>}
        </div>ll
    }


type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ ()=> { props.setCollapsed()}}>---{props.title}---</h3>
}

function AccordionBody() {
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}

