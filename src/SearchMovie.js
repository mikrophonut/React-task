import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import dataArr from './Data.js';
import './css/search.css';
import {changedData} from "./Home";
import { recordedData } from "./AddRecord";




const SearchForMovie = () => {

    const navigate = useNavigate();
    
    const [ fieldValue, setFieldValue ] = useState('');
    

    const handleSubmit = (e) => {
        
        e.preventDefault();

        let dataInSearch = recordedData !== undefined ? (changedData !== undefined ? changedData : dataArr) : dataArr;
    
    };


    return (
        <>
            <div className='searchBox'>
                
                <div>   

                    <h1>Search for records in library</h1>

                    <div className='searchExample'>

                        <h3>To search, type here by following examples:</h3>
                        
                        <h2>Example 1 - <span>1948</span></h2>       

                        <h2>Example 2 - <span>Ben-Hur</span></h2>  

                        <h2>Example 3 - <span>Beverly Hills Cop III</span></h2> 

                        <h2>Example 4 - <span>The Best Years of Our Lives</span></h2>   

                    </div>
                    
                    <form onSubmit={handleSubmit}>

                        <input type="text" name='title' defaultValue={fieldValue} />

                        <button type='submit'>Search</button>
                        
                    </form>

                    <div className="searchResult">
                        
                        <button>Clear result</button>

                    </div>

                    <button onClick={() => navigate(-1)}>Home page</button> 

                    </div>       
                    
                </div>

            </>
    );

}
export default SearchForMovie;