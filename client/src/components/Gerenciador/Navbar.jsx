import styles from "./Navbar.module.css";

function Navbar({signOut}) {
    return (
        <>
            <nav className={styles.navcontainer}>
                <h2 className={styles.text}>Gerenciador de Tarefas</h2>
                <button onClick={signOut} className={styles.nav_button}>Sair</button>
            </nav>
        </>
    
    )
}

export default Navbar;