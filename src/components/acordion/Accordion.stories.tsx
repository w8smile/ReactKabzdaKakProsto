import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      onChange={() => {}}
                      collapsed={true}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      onChange={() => {}}
                      collapsed={false}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      onChange={()=> {
                          setCollapsed(!collapsed)
                      }}
                      collapsed={false}
    />
}