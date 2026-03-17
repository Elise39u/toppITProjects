import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    
    type ValidationErrors = {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };

    const [errors, setErrors] = useState<ValidationErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("/register", form);

            // redirect after successful register
            window.location.href = "/location/1";
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data.errors);
                }
            }
        }
    };

    return (
        <div className="container locationBar">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name[0]}</p>}
                </div>

                <div className="form-element">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email[0]}</p>}
                </div>

                <div className="form-element">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password[0]}</p>}
                </div>

                <div className="form-element">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={form.password_confirmation}
                        onChange={handleChange}
                    />
                </div>

                <Button variant="outline-success" type="submit">Register</Button>
                <Button variant="outline-info" onClick={() => (window.location.href = "/")}> Login </Button>
             </form>
        </div>
    );
}