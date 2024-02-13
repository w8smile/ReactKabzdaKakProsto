import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import Accordion from "./components/acordion/Accordion";
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAccordion";
import {OnOf} from "./components/OnOf";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf";
import {ControlledCheckbox, ControlledInput, ControlledOption, Input, Input2} from "./components/input";

function App() {
    console.log('App rendring')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return <div className="App">
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <OnOf on={switchOn} onChange={setSwitchOn}/>
        <Accordion titleValue={"Menu"}
                   collapsed={accordionCollapsed}
                   onChange={() => {
                       setAccordionCollapsed(!accordionCollapsed)
                   }}/>
        <PageTitle title={"REACT KABZDA"}/>
        <UncontrolledOnOf onChange={setSwitchOn}/> {switchOn.toString()}
        <Input/>
        <Input2/>
        <ControlledInput/>
        <ControlledCheckbox/>
        <ControlledOption/>

    </div>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
