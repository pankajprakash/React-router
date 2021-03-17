    import React from 'react'

const Homepage = ({location}) => {
    // console.log(location.state.email)
    return (
        <div>
      
            
            <h1>welcome to home page </h1>

            <div className="emailinput">
                <li>{location.state.email}</li>
 
            </div>
        </div>
    )
}

export default Homepage;
