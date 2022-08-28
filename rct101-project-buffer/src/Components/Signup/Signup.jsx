import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Signup.module.css"

export default function Signup(){

    const {isAuth} = useContext(AuthContext);

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
            console.log(isAuth);
            alert("Sign up Successful");
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
                    <Link to="/">
                        <img id={styles.logo} src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className={styles.forms}>
                    <h1>Let's get your account set up</h1>
                    <div className={styles.emailbox}>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles.emailbox}>
                        <label>Create a Password</label>
                        <input type="password" />
                    </div>
                    <button onClick={handleSubmit}>Sign Up</button>
                    <div className={styles.belowdiv}>
                        <p>I agree to <span>Buffer's Terms of Service</span></p>
                        <Link to="/login">
                            <p id={styles.haveaccount}>Already have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <p>“With Buffer I can build social content out as far as I want into the future but also tailor campaigns if we see certain trends within the industry.”</p>
                <div className={styles.person}>
                    <img src="https://static.buffer.com/login/public/img/signup-avatar-publish.png" alt="Justin" />
                    <p>Justin Ozanich</p>
                    <p>Marketing Manager</p>
                    <p>Foster Coffee Company</p>
                </div>
            </div>
        </div>
    )
}