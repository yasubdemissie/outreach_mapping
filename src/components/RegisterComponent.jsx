import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import reg from "../assets/login.jpg";
// Adjust the path to your image

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <a href="/">
        <FaArrowLeft />
      </a>
      <div className="illustration">
        <img src={reg} alt="" height={600} width={500} />
      </div>

      <div className="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First Name"
            className="input-field"
            {...register("firstName", { required: true })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-field"
            {...register("lastName", { required: true })}
          />
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
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p>
          Have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
