import styles from "./Cadastro.module.css";

function Cadastro() {
    
    
    return (
        <div className={styles.login_container}>
            <div className={styles.form_container}>
                <div className={styles.input_container}>
                <form action="http://localhost:3000/cadastroTable" method="post">
                    <label htmlFor="username">Nome de Usuario:</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="senha">Digite a sua senha:</label>
                    <input type="password" name="password" id="password"/>
                    <button type="submit">Cadastrar</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;