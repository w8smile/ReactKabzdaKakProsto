import React, {useEffect, useState} from 'react';
import s from './Select.module.css';
import { KeyboardEvent } from "react";

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

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue]=useState(props.value)
    const selectedItem = props.items.find((el) => el.value === props.value);
    const hoveredItem = props.items.find((el)=>el.value===hoveredElementValue)

    const showItems = () => setActive(!active);
    const onClickHandler = (value: any) => {
        props.onChange(value);
        showItems();
    };
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key=== 'ArrowDown' || e.key==='ArrowUp'){
            for (let i=0; i<props.items.length; i++){
                if (props.items[i].value===hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }

        }
        if  (e.key==='Enter' ||  e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                {/*<select>*/}
                {/*    <option>Minsk</option>*/}
                {/*    <option>Krichev</option>*/}
                {/*    <option>Orsha</option>*/}
                {/*</select>*/}
                <span className={s.main} onClick={showItems}>
                    {selectedItem && selectedItem.title}</span>
                 {
                     active && (
                    <div className={s.items}>
                        {props.items.map(el => <div
                                onMouseEnter={()=>{setHoveredElementValue(el.value)}}
                                 className={s.item + ' ' + (hoveredItem===el ? s.select : '')}
                                 key={el.value} onClick={() => onClickHandler(el.value)}>
                                {el.title}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    );
};