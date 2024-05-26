import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { registerUser, setUser } = useContext(AuthContext);
  // console.log(registerUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (!/@gmail\.com$/.test(email)) {
      setEmailError("Email must end with '@gmail.com' ");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }
    if (!/\d{2,}$/.test(password)) {
      setError("Password must contain at least 2 numbers at the end!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain one special character");
      return;
    }
    setEmailError("");
    setError("");
    console.log(name, email, password, confirmPassword);
    registerUser(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span className="relative">
                  <span
                    className="absolute right-2 cursor-pointer bottom-[14px]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </span>
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-info"
                  type="submit"
                  value="Register"
                />
              </div>
              {error && <small className="text-red-600">{error}</small>}
              {emailError && (
                <small className="text-red-600"> {emailError}</small>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
