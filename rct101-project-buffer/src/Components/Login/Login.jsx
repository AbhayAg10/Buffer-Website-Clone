import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Login.module.css"
import image from "./loginimage.png"

export default function Login(){

    // const {isAuth, handleLogin} = useContext(AuthContext);

    const [formState, setFormState] = useState({
        email: "",
        password: ""
      });
    
      const auth = useContext(AuthContext);
      const navigate = useNavigate();
    
      function handleChange(e) {
        const { name, value } = e.target;
        setFormState({
          ...formState,
          [name]: value
        });
      }
    
      function handleSubmit() {
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formState)
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(auth.state.isAuth);
            alert("Login Successful");
            auth.handleLogin(res.token);
            navigate("/");

          })
          .catch((err) => {
            alert("error");
          });
      }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="logo" />
                </div>
                <div className={styles.forms}>
                    <h1>Login</h1>
                    <div className={styles.emailbox}>
                        <label>Email Address</label>
                        <input value={formState.email} name="email" onChange={handleChange} type="email" />
                    </div>
                    <div className={styles.emailbox}>
                        <label>Password</label>
                        <input value={formState.password} name="password" onChange={handleChange} type="password" />
                    </div>
                    <button onClick={handleSubmit} >Log In</button>
                    <div className={styles.belowdiv}>
                        <Link to="/signup">
                            <p id={styles.create}>Create an account</p>
                        </Link>
                        <p>Forgot your password</p>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                {/* <p>“With Buffer I can build social content out as far as I want into the future but also tailor campaigns if we see certain trends within the industry.”</p>
                <div className={styles.person}>
                    <img src="https://static.buffer.com/login/public/img/signup-avatar-publish.png" alt="Justin" />
                    <p>Justin Ozanich</p>
                    <p>Marketing Manager</p>
                    <p>Foster Coffee Company</p>
                </div> */}
                <img src={image} alt="" />
            </div>
        </div>
    )
}