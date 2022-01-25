import React from "react";
import '../Css/Table.css'
export default function Profile(props) { //Design items received from the server
 
   
    const letitrun = props.person.map(per =>
        <table style={{color:'white'}} >
            <tbody>
                <tr >
                    
                    <th>Name</th>
                    <th>ID</th>
                    <th>Money Pay</th>
                </tr>
                <tr>
                    
                    <td>{per.Name}</td>
                    <td>{per.StudentId}</td>
                    <td>{per.AvgGrade}</td>
                </tr>
            </tbody>
        </table>




    )
    return (

        <div style={{padding:10}}>
            {letitrun}
        </div>
    );
}