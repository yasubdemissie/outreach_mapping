import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    return (
        <div>
            Login
            <button type="button" onClick={() => navigate('/app')} >Go to Map</button>
        </div>
    )
}

export default Login
