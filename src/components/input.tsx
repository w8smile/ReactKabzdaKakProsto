import React, {ChangeEvent, useRef, useState} from 'react';



export const Input = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/><button onClick={save}>save</button>---{value}
        </div>
    );
};
export const Input2 = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        const inputValue = event.currentTarget.value
        setValue(inputValue)
    }
    return (
        <div>
            <input onChange={onChangeHandler}/>
            ---{value}
        </div>
    );
};

export const ControlledInput = () => {
    const [parrent, setParrent] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParrent(e.currentTarget.value)

    return(
        <div>
            <input value={parrent} onChange={onChangeHandler}/>
            <div>ParrentValue -  {parrent}</div>
        </div>
    )
}

export const ControlledCheckbox = () => {
    const [value, setValue]=useState(true)
const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=> setValue(e.currentTarget.checked)
    return(
        <div>
            <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
        </div>
    )
}
export const ControlledOption = () => {
    const [value, setValue] = useState<string|undefined>('1')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)

    return(
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Krichev</option>
                <option value={'3'}>Orsha</option>
            </select>

        </div>
    )
}

