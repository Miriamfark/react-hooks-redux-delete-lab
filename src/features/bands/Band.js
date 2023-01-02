import React from "react";
import{ useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

function Band({ band}) {

    const dispatch = useDispatch()

    function handleDeleteBand() {
        dispatch(bandRemoved(band))
    }

    return(
        <li key={band.id}>
            <span>{band.text}</span>
            <button onClick={handleDeleteBand}>Delete Band</button>
        </li>
    )
}

export default Band