import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={styles.login_container}>
      <div className={styles.form_container}>
        <div className={styles.input_container}>
          <form action="http://localhost:3000/validateLogin" method="post">
            <label htmlFor="username">Nome de Usuario:</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Logar</button>
          </form>
          <br />
          <Link to="/cadastro"><button>Cadastro</button></Link>
          
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
