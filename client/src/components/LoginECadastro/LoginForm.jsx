import { useEffect, useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import { supabase } from "../../lib/api_Supa";
import GerencidorDeTarefas from "../Gerenciador/GerenciadorDeTarefas";

function LoginForm() {
  const [user, setUser] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();


  const handleLogin = async (type) => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const { user, error } =
        type === "LOGIN"
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });
  };

  useEffect(() => {
    const session = supabase.auth.getSession();
    console.log(session);
    setUser(session?.user);

    const {data:authListener} = supabase.auth.onAuthStateChange((event,session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
      }
    });
    return () => {
      authListener.subscription.unsubscribe();
    }
  },[])

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div>
      {user ? <div><GerencidorDeTarefas/><button onClick={()=> signOut()}>SignOut</button></div> : 
      <div className={styles.login_container}>
        <div className={styles.form_container}>
          <div className={styles.input_container}>
            <div>
              <label htmlFor="username">Email:</label>
              <input type="text" name="username" id="username" ref={emailRef} required/>
              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password" ref={passwordRef} required/>

              <button type="submit" onClick={() => {handleLogin("LOGIN")}}>Logar</button>
              
            </div>
            <br />
            
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default LoginForm;
