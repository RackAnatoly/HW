import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,onChange,
        value, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?.map((t,i)=>{
        return (<option key={i} value={t}>{t}</option> )
    }); // map options with key


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>

    // <select value={color} onChange={handleChange}>
    //     {colors.map(item => {
    //         return (<option key={item.value} value={item.value}>{item.text}</option>);
    //     })}
    // </select>
    )
}

export default SuperSelect
