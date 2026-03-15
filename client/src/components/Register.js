import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const Register = ({ setAuth }) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const  { name, email, password } = input;

    const onChange = (e) =>{
         setInput({...input, [e.target.name]: e.target.value});
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();

        try {

            const body = { name, email, password };

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
             localStorage.setItem("token", parseRes.token);


        } catch (error) {
          console.log(error.message);  
        }
    }

    return (
       <Fragment>
         <h1 className="text-center my-5">Register</h1>
         <form onSubmit={onSubmitForm}>
             <input type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="Name" className="form-control my-3" required/>
             <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" className="form-control my-3" required/>
             <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="Password" className="form-control my-3" required/>
             <button type="submit" className="btn btn-success btn-block">Register</button>
         </form>
         <Link to="/login">Login</Link>
       </Fragment>
    );
};

export default Register;
