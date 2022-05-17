import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {ChangeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['black', 'red', 'lightgreen', 'white'];

function HW12() {
    // const theme = 'some'; // useSelector
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    const theme = useSelector<AppStoreType, string>(state => state.theme)

    const onChangeCallback = (theme: string) => {
        // let theme=themes[Math.floor(Math.random()*themes.length)]
        dispatch(ChangeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <div>
                {/*<button onClick={onChangeCallback}>go</button>*/}
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
