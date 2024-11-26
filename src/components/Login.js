import {useNavigate} from "react-router-dom"
import {users} from "../data/users"
import {useState} from "react"

const Login = () =>{

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] =useState("")
    
    const navigate = useNavigate()
    const authenticate = () =>{
        const currentuser = users.find((user)=>user.username===userName)

        if(!currentuser){
            return setError("User Not Found")
        }
        if(currentuser.password!==password){
            return setError("Password Does not Match")
        }

        navigate("/")
    }

    return(
        <div>
            <h3>Name</h3>
            <input name="username" type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <h3>Password</h3>
            <input name="password" type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <h1>Login Here</h1>

            <button onClick={authenticate}>Login</button>
            {error && (
            <h4>Error: {error}
            </h4>
            )}
        </div>
    )
}

export default Login