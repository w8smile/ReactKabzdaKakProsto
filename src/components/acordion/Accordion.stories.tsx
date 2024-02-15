import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {

    return <Accordion titleValue={'Collapsed Accordion'}
                      onChange={() => {}}
                      collapsed={true}
                      names={[{title: 'Serg', value: 1},
                          {title: 'Kris', value: 2},
                          {title: 'Yuki', value: 3}]}
    onClick={()=>{}}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      onChange={() => {}}
                      collapsed={false}
                      names={[{title: 'Serg', value: 1},
                          {title: 'Kris', value: 2},
                          {title: 'Yuki', value: 3}]}
                      onClick={()=>{}}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      onChange={()=> {
                          setCollapsed(!collapsed)
                      }}
                      collapsed={false}
                      names={[{title: 'Serg', value: 1},
                          {title: 'Kris', value: 2},
                          {title: 'Yuki', value: 3}]}
                      onClick={()=>{}}
    />
}