import styles from "./Signup.module.css"

export default function Signup(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="logo" />
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
                    <button>Sign Up</button>
                    <div className={styles.belowdiv}>
                        <p>I agree to <span>Buffer's Terms of Service</span></p>
                        <p>Already have an account?</p>
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