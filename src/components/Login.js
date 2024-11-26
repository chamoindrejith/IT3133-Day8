import {useNavigate} from "react-router-dom"
const Login = () =>{

    const navigate = useNavigate()
    const authenticate = () =>{
        navigate("/")
    }

    return(
        <div>
            <h1>Login Here</h1>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}

export default Login