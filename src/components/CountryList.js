import React from 'react'
import Lang from './Lang'
import { useState,useEffect } from 'react';
import { emptyObject } from 'check-types';
import axios from 'axios';
function CountryList({content}) {
    //STATE TO CHECK WHETHER THE SHOW BUTTON IS CLICKED OR NOT
    const [cond,setCond] = useState(false,emptyObject);

    //IF THERE IS TOO MANY RESULT FOR SEARCH
    if(content.length>10){
        if(cond.bol){
            //TO MAKE TEMPORARY SHOWING VIEW OF COUNTRY BY CLICKING SHOW BUTTON
            setCond({bol:false,obj:emptyObject});
            }
        return (
            <div>
                Too many matches for the search query
            </div>
        )
    }
    //IF THERE IS ONLY ONE COUNTRY
    else if(content.length===1){
        if(cond.bol){
            //TO MAKE TEMPORARY SHOWING VIEW OF COUNTRY BY CLICKING SHOW BUTTON
            setCond({bol:false,obj:emptyObject});
        }

        

        return (
            //STATS OF THE COUNTRY
            <div>
                <h2>{content[0].name}</h2>
                <p>Capital: {content[0].capital}</p>
                <p>population : {content[0].population}</p>
                <h3>Languages</h3>
                <Lang content={content[0].languages}></Lang>
                <img src={content[0].flag}></img>
            </div>
        )
    }
    else{
        //IF 1<COUNTRY NUMBER<11
        return (
            //CREATE A LIST VIEW FOR SEARCH RESULTS
            //LIST ITEMS ARE CONSIST OF THE NAME AND A SHOW BUTTON
            //IF BUTTON IS CLICKED,STATS OF THE COUNTRY WILL BE SHOWN
            <div>
                <ul>
                    
                {content.map( (con,i) => 
                    
                    <li key={i}>{con.name}  <button onClick={  ()  => { 
                        setCond({bol:true,obj:con});
                    }}>Show</button></li>
                )
                }
                </ul>
                {//IF THE BUTTON IS CLICKED, COUNTRY STATS WILL BE SHOWN 
                cond.bol && 
                    <div>
                        <h2>{cond.obj.name}</h2>
                <p>Capital: {cond.obj.capital}</p>
                <p>population : {cond.obj.population}</p>
                <h3>Languages</h3>
                <Lang content={cond.obj.languages}></Lang>
                <img src={cond.obj.flag}></img>
                </div>}
            </div>
        )
    }
}

    


export default CountryList
