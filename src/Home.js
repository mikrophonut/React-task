import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataArr  from './Data.js';  
import './css/home.css';  
import { recordedData } from "./AddRecord";



let changedData;

const Home = () => {

    const usedData = recordedData !== undefined ? recordedData : dataArr;

    const [dataInfo, setDataInfo] = useState(usedData);
    
    const navigate = useNavigate();
    
    let tableHeading = Object.keys(dataInfo[0]);

    const handleClick = (e) => { 
        
        const dataIndex = e.target.getAttribute("data");

        if(window.confirm(`Siguren li si che iskash da triesh zapisa ${JSON.stringify(dataInfo[dataIndex])}?`)){
            
            const filteredData = dataInfo.filter((data, index, arr) => {
                                
                return  arr[index] !== arr[dataIndex];   

            });

            filteredData.map((obj, index) => obj.id = index + 1);

            setDataInfo(filteredData);

            changedData = filteredData;

            return dataInfo;
               
        }else

            alert(`Dobre che se otkaza da triesh zapis ${JSON.stringify(dataInfo[dataIndex])}!`);

    };





    return(
        
        <>
            <div className="title">

                <p>Movie Library</p>

                <div>

                    <button onClick={() => navigate("/RecordBuilder")}>Add new movie</button>

                    <button onClick={() => navigate("/SearchForMovie")}>Search for movie</button>

                </div>

            </div>
            
            <div className="table">

                <table>

                    <thead>

                        <tr>

                            {tableHeading.map((title, index) => {
                                                
                                return <th key={index}><h2>{title}</h2></th>

                            })}

                        </tr>

                    </thead>

                    <tbody>

                        {dataInfo.map( (obj, index) => {

                            return (

                                <tr key ={index}>
                                    
                                    <td>{obj.id}</td>        
                                    <td>{obj.title}</td>        
                                    <td>{obj.director}</td>        
                                    <td>{obj.distributor}</td>        
                                    <td>{obj.imdb_rating}</td>        
                                    <td>{obj.imdb_votes}</td>        
                                    <td className='active' onClick={() => navigate("/EditRecord")}>Edit</td>
                                    <td className='active' key={index} data={index} onClick={handleClick}>Delete</td>

                                </tr>
                            );
                        })} 

                    </tbody>

                </table>

            </div>

        </>

    );

}

export {Home, changedData} ;