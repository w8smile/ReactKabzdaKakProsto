import React, { useState } from 'react';
import s from './Select.module.css';

type ItemsOptionType = {
    value: any;
    title: string;
};

type OptionType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemsOptionType[];
};

export const Select = (props: OptionType) => {

    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue]=useState(props.value)
    const selectedItem = props.items.find((el) => el.value === props.value);
    const hoveredItem = props.items.find((el)=>el.value===hoveredElementValue)

    const showItems = () => setActive(!active);
    const onClickHandler = (value: any) => {
        props.onChange(value);
        showItems();
    };
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i=0; i<props.items.length; i++){
            if (props.items[i].value===hoveredElementValue) {
                if (props.items[i+1]) {
                    props.onChange(props.items[i+1].value)
                    break
                }
            }
        }
    }

    return (
        <>
            <select>
                <option>Minsk</option>
                <option>Krichev</option>
                <option>Orsha</option>
            </select>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={s.main} onClick={showItems}>
          {selectedItem && selectedItem.title}
        </span>
                {active && (
                    <div className={s.items}>
                        {props.items.map((el) => (
                            <div onMouseEnter={()=>{setHoveredElementValue(el.value)}}
                                className={s.item + ' ' + (hoveredItem===el ? s.select : '')}
                                key={el.value} onClick={() => onClickHandler(el.value)}>
                                {el.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};