import React from 'react'

const LandingPage = ({history,location}) => {
    const logInPage = () => {
        history.push('/login')
    }
    const signUpPage = () => {
        history.push('/about')
    }
    return (
        <div>

            <div className="nav">
                <ul className="list-items">
                    <li> <button onClick={logInPage} className="btn1"> Login</button></li>
                    <li>   <button onClick={signUpPage} className="btn2"> Sign up</button></li>

                </ul>
                
              
            </div>
            

        </div>
    )
}

export default LandingPage;
