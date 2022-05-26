import React, {useEffect, useState} from 'react';
import {APIRequests} from "./API/h13-api";

export const Request = () => {

    let [value,setValue]=useState(true);


    useEffect(() => {
        APIRequests.post(value)
            .then(res => console.log(res.data))
            .catch(res=>console.log(res.response ? res.response.data.errorText : res.message))
            },[value])



    return (
        <div>
            <button>Кнопка для игната</button>
            <input type='checkbox' checked={value}
                   onChange={(e)=>setValue(e.currentTarget.checked)} />
        </div>
    );
};
