import styles from "./Login.module.css"
import image from "./loginimage.png"

export default function Login(){
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
                        <input type="email" />
                    </div>
                    <div className={styles.emailbox}>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button>Log In</button>
                    <div className={styles.belowdiv}>
                        <p>Create an account</p>
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