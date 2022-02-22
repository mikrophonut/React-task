import React from "react";
import { useNavigate } from "react-router-dom";

const EditRecord = () => {

    const navigate = useNavigate();

    return (
        <>
            <h2>This is psge for editing records</h2> 
            <button onClick={() => navigate(-1)}>Back</button>   
        </>
    )
}
export default EditRecord;

