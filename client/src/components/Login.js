import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const login = ({setAuth}) => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;

    const onChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async(e) => {
        e.preventDefault();

        try {

            const body = { email, password };

            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
             localStorage.setItem("token", parseRes.token);

            setAuth(true);

        } catch (error) {
          console.log(error.message);  
        }
    }
    return (
       <Fragment>
         <h1 className="text-center my-5">login</h1>
         <form onSubmit={onSubmitForm}>
             <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" className="form-control my-3" />
             <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="Password" className="form-control my-3" />
             <button type="submit" className="btn btn-suceess btn-block">Login</button>
         </form>
         <Link to="/register">Register</Link>
       </Fragment>
    );
};

export default Login;
