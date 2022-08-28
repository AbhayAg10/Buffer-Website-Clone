import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import HomePage from "../HomePage/HomePage";
import styles from "./Navbar.module.css";

export default function Navbar () {
    const auth = useContext(AuthContext);
    
    return (
        <div className={styles.upper}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <img src="https://buffer.com/library/content/images/2021/02/buffer-logo-2.svg" alt="logo" />
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+DQo8cGF0aCBmaWxsPSIjM2E3NWM0IiBkPSJtMCwwaDEyMDB2ODAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iI2Y5ZGQxNiIgZD0ibTAsNDAwaDEyMDB2NDAwaC0xMjAweiIvPg0KPC9zdmc+DQo=" alt="ukraine" />
                        </div>
                    </Link>
                    <div className={styles.content}>
                        <div id={styles.features}>
                            <p>Tools</p>
                        </div>
                        <div id={styles.features}>
                            <p>Pricing</p>
                        </div>
                        <div id={styles.features}>
                            <p>Blog</p>
                        </div>
                        <div id={styles.features}>
                            <p>About</p>
                        </div>
                        <div id={styles.features}>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div className={styles.account}>
                        {auth.state.isAuth===true? 
                        <div className={styles.login}>
                            <p>Hi User</p>
                        </div>
                        :<div className={styles.login}>
                          <Link to="/login"><p id={styles.loginbtn}>Log in</p></Link>
                        </div>}
                        <div className={styles.getstarted}>
                        <Link to="/signup"><button id={styles.signupbtn}>Get started now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}