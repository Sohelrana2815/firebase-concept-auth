import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, setUser, faceBookLogin } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
    });
  };
  const handleFaceBookLogin = () => {
    faceBookLogin().then((result) => {
      setUser(result.user);
    });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
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
                  type="password"
                  name="password"
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
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-secondary w-[213px] mx-auto "
            >
              Google login
            </button>
            <button
              onClick={handleFaceBookLogin}
              className="btn btn-info w-[213px] mx-auto "
            >
              Facebook login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
