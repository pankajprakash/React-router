import React from 'react'

const Signupwelcome = ({location}) => {
    console.log(location);
    return (
        <div>
            <input type="text" value={location.state.name}/>
            <input type="text" value={location.state.lastname}/>
            <input type="text" value={location.state.email}/>
            <input type="text" value={location.state.phone}/>
            {/* <h1>welcome to Our homepage</h1>
            <div className="btn-list">
            <ul>

         <li>  Name: {location.state.name}</li>
          <li> Last Name: {location.state.lastname}</li>
           <li> Email: {location.state.email}</li>
             <li> Phone : {location.state.phone}</li>
            </ul>
             */}
</div>
        
    )
}

export default Signupwelcome
