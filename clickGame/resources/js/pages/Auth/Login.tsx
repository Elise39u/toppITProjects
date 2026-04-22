import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { router } from '@inertiajs/react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    type ValidationErrors = {
        email?: string[];
        password?: string[];
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.post('/login', {
            email,
            password,
            remember,
        }, {
            onBefore: () => console.log("Starting login request..."),
            onSuccess: (page) => {
                if (page.props.auth.user && page.component === "Auth/Login") {
                    const loc = page.props.auth.user.current_location_id || 1;
                    router.get(`/location/${loc}`);
                }
            },
            onError: (errors) => {
                // This runs if Laravel returns ->withErrors()
                console.log("Login Failed! Validation errors:", errors);
            },
            onFinish: () => console.log("Request finished."),
        });
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
                <Button variant="outline-info" onClick={() => (window.location.href = "/Register")}> Register </Button>
            </form>
        </div>
    );
}