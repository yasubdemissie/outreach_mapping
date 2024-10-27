import { useForm } from "react-hook-form";
import "./Login/login.css";
import log from "../assets/login.jpg";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <a href="/" className="back-link">
        <FaArrowLeft />
      </a>
      <div className="illustration">
        <img src={log} alt="" height={600} width={500} />
      </div>

      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="email"
            className="input-field"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            className="input-field"
            {...register("password", { required: true })}
          />
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
