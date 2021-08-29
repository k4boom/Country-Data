import React from 'react'
//IT IS CREATED TO SHOW THE LANGUAGES USED IN A COUNTRY
function Lang({content}) {
    
    return (
        <div>
            <ul>
            {content.map( (con) => 
                
                <li>{con.name}</li>
            )
            }
            </ul>
        </div>
    )
}

export default Lang
