import React from 'react'

const Signupformdata = ({history,location}) => {
  
    const show=()=>{
       history.push("/Signupwelcome",{
        name:location.state.name,
        lastname:location.state.lastname,
        email:location.state.email,
        phone:location.state.phone
       })
                    //  <li>First Name={location.state.name}</li>
                    // <li> Last Name={location.state.lastname}</li>
                    //  <li> Email= {location.state.email}</li>
                    //  <li> Phone={location.state.phone}</li>
               
        
    }
    
    return (
        <div>
            <h1>welcome you are sucessfully signed up!! </h1>
            <button onClick={show} className="show-users">Click here to show users</button>
            {/* <div className="formdata">
                 <ul>
                     <li>First Name={location.state.name}</li>
                    <li> Last Name={location.state.lastname}</li>
                     <li> Email= {location.state.email}</li>
                     <li> Phone={location.state.phone}</li>
                 </ul>
             </div>   */}

          
        </div>
    )
}

export default Signupformdata
