import React from "react";
import "../style/component/01-css-global/toggle.css"

export default function Toggle(){
    return(
        <>
         <label class="switch">
            <input type="checkbox" />
            <span class="slider">
            <svg class="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
            </span>
        </label>
        </>
    )
}
