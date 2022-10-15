import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="usuário" />
        <input type="password" placeholder="senha" />
        <button>Login</button>
        <span>
          Crie já sua conta!<Link to="/register">Registrar</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
