import styles from "./Navbar.module.css";

export default function Navbar () {
    return (
        <div className={styles.upper}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src="https://buffer.com/library/content/images/2021/02/buffer-logo-2.svg" alt="logo" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+DQo8cGF0aCBmaWxsPSIjM2E3NWM0IiBkPSJtMCwwaDEyMDB2ODAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iI2Y5ZGQxNiIgZD0ibTAsNDAwaDEyMDB2NDAwaC0xMjAweiIvPg0KPC9zdmc+DQo=" alt="ukraine" />
                    </div>
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
                        <div className={styles.login}>
                            <p>Log in</p>
                        </div>
                        <div className={styles.getstarted}>
                            <button>Get started now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}