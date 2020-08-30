import React from 'react';

export default function You() { 
     const [developer, setDeveloper] = React.useState({
         language: "",
          yearsExperience: 0  });

  const handleChangeYearsExperience = (e) => {  
       setDeveloper({ ...developer, yearsExperience: e.target.value });
      }

  return ( 
         <div>   
                <button  onClick={() => setDeveloper({   
                             language: "javascript",
                                 yearsExperience: 0 }) } >
                                Change language to JS </button> 
                                <input    type="number"  
                                     value={developer.yearsExperience}      
                                       onChange={handleChangeYearsExperience} />
                                          <p>I am now learning {developer.language}</p>   
                                      <p>I have {developer.yearsExperience} years of experience</p>
       </div>  ); }