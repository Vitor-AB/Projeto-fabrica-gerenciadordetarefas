import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.login_container}>
      <div className={styles.form_container}>
        <form action="http://localhost:3000/validateLogin" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Logar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
