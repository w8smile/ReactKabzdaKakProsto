import React from 'react';
import './App.css';
import {Accordion} from "./components/acordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOf} from "./components/OnOf";
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAccordion";

// function sum(a: number,b: number) {
//     alert(a + b)
// }
// sum(23,12);
// sum(100,300);
// hello();

function App() {
    console.log('App rendring')
    return <div>
        <OnOf/>
        <OnOf/>
        <OnOf/>
        <OnOf/>
        <UncontrolledAccordion titleValue={"Menu"}/>
        <UncontrolledAccordion titleValue={"Users"}/>

        {/*<PageTitle title={"REACT KABZDA"}/>*/}

        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
    </div>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
