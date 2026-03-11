import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("/login", {
                email,
                password,
                remember,
            });

            window.location.href = "/location/1";
        } catch (error: any) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className="container locationBar">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p>{errors.email[0]}</p>}
                </div>

                <div className="form-element">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p>{errors.password[0]}</p>}
                </div>

                <div className="form-element">
                    <label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Remember Me
                    </label>
                </div>

                <Button variant="outline-success" type="submit">Login</Button>
                <Button variant="outline-info"><a href="/Register"> Register</a></Button>
            </form>
        </div>
    );
}