import React from 'react';
import './App.css';
import {Accordion} from "./components/acordion/Accordion";
import {Rating} from "./components/rating/Rating";

// function sum(a: number,b: number) {
//     alert(a + b)
// }
// sum(23,12);
// sum(100,300);
// hello();

function App(props: any) {
    console.log('App rendring')
    return <div>
        {/*<PageTitle title={"This is APP component"}/>*/}
        {/*<PageTitle title={"My Friends"}/>*/}
        {/*Article 1*/}
        {/*<Rating value={1}/>*/}
        <Accordion titleValue={"Menu"} collapsed={false}/>
        <Accordion titleValue={"Users"} collapsed={true}/>
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
    console.log('PageTitle rendring')
    return <h1>{props.title}</h1>
}


export default App;
