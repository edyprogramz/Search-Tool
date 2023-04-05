import './App.css';
import Search from './search/Search';
import React, { useState } from 'react';
import Users from './search/DataFile.json';


function App() {
  const [query, setQuery] = useState(" ");

  const keys = [ "FullName", "JobTitle"]
  // const keys = ["EmployeeId", "FullName", "JobTitle", "Department", "Gender", "AnnualSalary", "Bonus", "Country", "City"]



  const searchFilter = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)))
  }

  return (
    <div className="App">
      <div className="app-header">
        <h1>My Search Tool</h1>
        <input 
          className="search-input"
          type="text" 
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />  
      </div>
      
      <Search data={searchFilter(Users)}/>
    </div>
  );
}

export default App;
