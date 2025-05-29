import { useState } from "react";
import "./AuthPage.css";


const Login = () => {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedMethod, setIsLoggedMethod] = useState(true);

//   useEffect(() => {
//     if (authState.isLoggedIn) {
//       router.push("/dashboard");
//     }
//   }, [authState.isLoggedIn]);

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       router.push("/dashboard");
//     }
//   }, []);

//   useEffect(() => {
//     dispatch(emptyMessage());
//   }, [isLoggedMethod]);

//   const handleLogin = () => {
//     if (!email || !password) return alert("Please fill in all fields");
//     dispatch(loginUser({ email, password }));
//     setEmail("");
//     setPassword("");
//   };

//   const handleRegister = () => {
//     if (!name || !username || !email || !password)
//       return alert("Please fill in all fields");
//     dispatch(registerUser({ email, password, name, username }));
//     setEmail("");
//     setUsername("");
//     setName("");
//     setPassword("");
//   };

  return (
    <>
      <div className="container">
        <div className="cardContainer">
          <div className="cardContainer_left">
            <p className="heading_left">
              {isLoggedMethod ? "Sign In" : "Sign Up"}
            </p>
            {/* {authState.message && (
              <p className={authState.isError ? "error" : "success"}>
                {authState.message}
              </p>
            )} */}
            <div className="inputContainer">
              {/* {!isLoggedMethod && (
                <div className="inputRow">
                  <input
                    type="text"
                    className="inputField"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="inputField"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              )} */}
              <input
                type="text"
                className="inputField"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                // onClick={() => {
                //   if (isLoggedMethod) {
                //     handleLogin();
                //   } else {
                //     handleRegister();
                //   }
                // }}
                // className="btn"
              >
                {isLoggedMethod ? "Sign In" : "Sign Up"}
              </div>
            </div>
          </div>
          <div className="cardContainer_right">
            <p className="heading_right">
              {isLoggedMethod
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <div
              onClick={() => {
                setIsLoggedMethod(!isLoggedMethod);
              }}
              className="btn"
            >
              {isLoggedMethod ? "Sign Up" : "Sign In"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
