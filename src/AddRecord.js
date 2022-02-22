import React, { memo, useState } from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import {changedData} from "./Home";
import dataArr from "./Data";
import "./css/addRecord.css";

let recordedData;

const RecordBuilder = () => {

    let idNum; 
    
    let dataUse =  changedData !== undefined ? changedData : dataArr;

    const navigate = useNavigate();
    
    const [data, setData] = useState(dataUse);

    if(changedData !== undefined){

        idNum = changedData.length + 1;
        
    } else

        idNum = dataArr.length + 1;
        

    const [formData, setFormData] = useState({
        id: idNum,
        title: "",
        director: "",
        distributor: "",
        imdb_rating: "",
        imdb_votes: "",

    })

    const addFormChange = (event) => {

        event.preventDefault();

        const fieldName = event.target.getAttribute('name');

        const fieldValue = event.target.value;

        const newFormData = {...formData};

        newFormData[fieldName] = fieldValue;

        setFormData(newFormData);

    }

    const addFormSubmit = (event) => {

        event.preventDefault();

        const newData = {
            id: formData.id,
            title: formData.title,
            director: formData.director,
            distributor: formData.distributor,
            imdb_rating: formData.imdb_rating,
            imdb_votes: formData.imdb_votes,
        } 

        const newDatas = data.push(newData);
        
        setData(newDatas);

        recordedData = data;

        console.log(data);

    }
    
    return(

        <div className="addRecord">

            <div>

                <h2>Add new record in movie library!</h2>

                <form onSubmit={addFormSubmit}>

                    <label htmlFor="title">Enter Title record </label>
                    <input 
                        type="text"
                        name='title'
                        required='required' 
                        placeholder="Enter a title..." 
                        onChange={addFormChange}
                    />
                    <label>Enter Director record </label>
                    <input 
                        type="text" 
                        name='director' 
                        required='required' 
                        placeholder="Enter a director name..." 
                        onChange={addFormChange}
                    />
                    <label>Enter Distributor record </label>
                    <input 
                        type="text" 
                        name='distributor' 
                        required='required' 
                        placeholder="Enter a distributor..." 
                        onChange={addFormChange}
                    />
                    <label>Enter imdb_rating record </label>
                    <input 
                        type="text" 
                        name='imdb_rating' 
                        required='required' 
                        placeholder="Enter a imdb_rating" 
                        onChange={addFormChange}
                    />                 
                    <label>Enter imdb_votes record </label>
                    <input 
                        type="text" 
                        name='imdb_votes' 
                        required='required' 
                        placeholder="Enter a imdb_votes" 
                        onChange={addFormChange}
                    />
                    <button type="submit">Save record</button><br/>

                </form>    

                <button onClick={() => navigate(-1)}>Back to Homepage</button>

            </div>
            
        </div> 

    );

} 
export { RecordBuilder, recordedData };