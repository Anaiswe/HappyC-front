import { useNavigate } from "react-router-dom";
import "../assets/styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <button
          className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to Home?
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="button"
        >
          Signup
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="button"
        >
          Login
        </button>
      </div>
    </>
  );
};
export default Header;
