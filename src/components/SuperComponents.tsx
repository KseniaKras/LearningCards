import React from 'react';
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../common/c8-SuperDoubleRange/SuperDoubleRange";

export const SuperComponents = () => {
    return (
        <div>
            <div>
                <SuperButton />
            </div>
            <div>
                <SuperInputText />
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <SuperCheckbox />
            </div>
            <div>
                <SuperEditableSpan />
            </div>
            <div>
                <SuperSelect />
            </div>
            <div>
                <SuperRadio />
            </div>
            <div>
                <SuperRange />
            </div>
            {/*<SuperDoubleRange />*/}
        </div>
    );
};