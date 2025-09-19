import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router"

const Login = () => {
    const [email, setEmail] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email)
        navigate("/")
    }

    return (
        <div className="flex item-center justify-center min-h-screnn">
            <form onSubmit={handleSubmit} className="p-6 border rounded shadow-md space-y-4">
                <h2 className="text-xl font-bold">Login</h2>
            </form>
        </div>
    )
}

export default Login