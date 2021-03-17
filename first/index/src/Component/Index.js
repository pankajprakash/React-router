import React,{useState} from 'react'
const Fun =() =>
{
const [state, setState] = useState()




const array1 = [{name:"pankaj",
age:23,
gender:"female",
emaikl:"p@keymouseit.com"},
{name:"gaurav",
age:23,
gender:"female",
emaikl:"p@keymouseit.com"},
{name:"rahul",
age:23,
gender:"female",
emaikl:"p@keymouseit.com"}]


const submit=(e)=>{

    setState(e.target.value)
}


return(
    <div>
        <form>
            <ul>
                {
                    array1.map(item=>(
                        <li key={item.name}> {item.name} and {item.age}
                        <input type="radio" name="name" value={item.name} onChange={submit} /></li>
                    ))
                }
            </ul>
        </form>
    </div>


)

            }
            export default Fun;