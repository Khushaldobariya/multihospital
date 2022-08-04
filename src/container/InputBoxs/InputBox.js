import React from 'react';
import { FormfeedStyle, InputBoxstyle } from './InputBoxstyle';


function InputBox({children,errors=false,errorMessages='', ...rest}) {
    return (
        <>
        <InputBoxstyle {...rest}>
            {children}
        </InputBoxstyle >
        
        <FormfeedStyle error={errors}>
            {errorMessages}
        </FormfeedStyle>
    </>
    );
}


export default InputBox;