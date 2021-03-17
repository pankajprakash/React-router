import React,{useState} from 'react'


const Login= ({history,location})=> {
    const[name,SetName]=useState()

const submit = () => {
  
    history.push('/homepage',{
        email: name
        
       
    })
}
const getname = (e) =>{
    SetName(e.target.value);

}
    return (
    <>
        <div className="container">
            
            <div className="inputs">
            <form>
                <label> email</label>
                <input type="text"  value={name} name="name" onChange={getname}/><br></br>
                <label>Password</label>
                <input type="password" ></input>
                <button className="loginsub" onClick={submit} >Submit</button>
            </form>
            </div>

          
        </div>
    </>
    )
}
export default Login;