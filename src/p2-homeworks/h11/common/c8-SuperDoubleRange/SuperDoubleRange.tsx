import {useState} from "react";
import {TwoThumbInputRange} from "react-two-thumb-input-range";

type PropsType = {
    onChangeRange: (value: any) => void
    value: number
}

export function SuperDoubleRange(props: PropsType) {
    const [value, setValue] = useState<any>([0, 100])

    const onValueSChange = (values: any) => {
        let a=[];
        a[0]=props.value;
        a[1]=value[1];
        setValue(a[0])
        props.onChangeRange(values[0])
    }

    return <TwoThumbInputRange onChange={onValueSChange} values={value} min={0} max={100}/>
}