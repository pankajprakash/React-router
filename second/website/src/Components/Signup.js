import React,{useState} from 'react'

export const Signup = ({history,location}) => {
    const[name,Setfname]=useState()
    const[lastname,Setlname]=useState()
    const[email,Setemail]=useState()
    const[DOB,SetDob]=useState()
    const[phone,SetPhone]=useState()
    


  

    const submit=()=>{
        history.push('/Signupformdata',{
           name:name,
           lastname:lastname,
           email:email,
           dob:DOB,
           phone:phone

        })

       
    }


    const fname=(e)=>{
        Setfname(e.target.value)

    }

    const lname=(e)=>{
        Setlname(e.target.value)

    }


    const Email=(e)=>{
        Setemail(e.target.value)

    }


   

    const phone1=(e)=>{
        SetPhone(e.target.value)

    }


    const submission=(e)=>{
        e.preventDefault();
    }
    return (
        <>
        <div className="container">
            <form onSubmit={submission}> 
           <h3>Sign up</h3>
            
            <label>First Name</label>
            <input type="text" value={name} onChange={fname}></input>
            <label>Last Name</label>
            <input type="text"value={lastname} onChange={lname} ></input>
            <label>Email</label>
            <input type="email" value={email} onChange={Email}></input>
           
            <label>phone number</label>
            <input type="text" value={phone} onChange={phone1}></input>
            <button className="btn3" onClick={submit}>Submit</button>
           

           
           
            </form>

        </div>
        </>
    )
}
export default Signup;