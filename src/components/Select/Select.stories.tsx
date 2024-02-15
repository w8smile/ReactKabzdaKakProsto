import {action} from '@storybook/addon-actions';
import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
};

export const WithValue = () => {
    const [value, setValue] = useState(3)
    return (
        <>
            <Select onChange={action('ValueChanged')}
                    items={[
                        {value: 1, title: 'Minsk'},
                        {value: 2, title: 'Krichev'},
                        {value: 3, title: 'Mogilev'}]}
                    value={value}/>
        </>

    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <div>
            <Select onChange={action('ValueChanged')}
                    value={value}
                    items={[
                        {value: 1, title: 'Minsk'},
                        {value: 2, title: 'Krichev'},
                        {value: 3, title: 'Mogilev'}]}
            />
        </div>

    )
}

