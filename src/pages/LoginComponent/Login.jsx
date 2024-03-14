import React ,{useState}from "react";
import tebleimg from "../Images/table.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import googlelogo from "../Images/googlelogo.png";
import fblogo from "../Images/fblogo.png";
import { useNavigate } from "react-router-dom";
import './Login.css'
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (e)=>{
       setEmail(e.target.value)
  }
  const handlepassword = (e)=>{
    setPassword(e.target.value)
}

const handlesubmit = (e) => {
    e.preventDefault();
    // Store user data in localStorage
    localStorage.setItem("userEmail", email);
    navigate('/dashboard')
    // You can add further logic like redirecting to another page after login
  };
  return (
    <section className="login_section">
      <div className="intro">
        <div className="table_image">
          <img src={tebleimg} alt="" />
        </div>
        <div className="restro_name">
          <h1>RestroDineTech</h1>
          <h3>ORDER AT EASE</h3>
        </div>
      </div>
      <div className="login">
        <h5>Welcome to</h5>
        <h1>RestroDineTech</h1>
        <div className="login_with_platform">
          <div className="google">
            
              <img src={googlelogo} alt="" />
              <p>Login with google</p>
            
          </div>
          <div className="fackbook">
            
              <img src={fblogo} alt="" />
              <p>Login with fackbook</p>
            
          </div>
          <hr />
          <span>
            <p className="sepretion">OR</p>
          </span>
          <div className="login_with_data">
            <IconContext.Provider
              value={{
                color: "rgb(82, 5, 101)",
                className: "global-class-name",
                size: "1.4em"
              }}
            >
              <form onSubmit={handlesubmit}>
                <span>
                  <MdOutlineEmail />
                  <input type="email" placeholder="Enter your email" onChange={handleemail} />
                </span>
                <span>
                  <FaUnlockAlt />
                  <input type="password" placeholder="Enter your password"  onChange={handlepassword}/>
                </span>
                <button type="submit">Login</button>
              </form>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
