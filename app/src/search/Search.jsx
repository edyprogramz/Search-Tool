// import User from '../search/DataFile.json';
import '../App.css';

function Search({data}) {
    return (  
        <div className="search">
            <div id='table-grid'>
                <div className='heading'>
                    <h3></h3>
                    <h3>Name</h3>
                    <h3>Job</h3>
                    <h3>Salary</h3>
                </div>                
             
            {data.map((item, index) => {
                return(
                    <div className='user-info' key={index}>
                        <div className='userImg'>
                            
                            <img src={item.imgUrl} alt="profile-pic"/>
                        </div>
                        <div>
                            
                            {item.FullName}
                        </div>
                        <div>
                            
                            {item.JobTitle}
                        </div>
                        <div>
                            
                            ksh.{item.AnnualSalary}
                        </div>

                        
                        
                        
                        
                    </div>
                                    
                                            
                )
            })}
            </div> 

        </div>
    );
}

export default Search;
{/* <table className="table">
<tr className='table-heading'>
    <th></th>
    <th>Name</th>
    <th>Job</th>
    <th>Salary p.a.</th>
</tr>
{data.map((item, index) => {
    return(
        <tr key={index} className="user-info">
            <td>
                <img src={item.imgUrl} alt="profile-picture"/>
            </td>
            <td>{item.FullName}</td>
            <td>{item.JobTitle}</td>
            <td>ksh.{item.AnnualSalary}</td>
        </tr> 
    )
})}

</table> */}