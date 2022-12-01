// PKG
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
// import components et des routes
import Header from "./components/Header";
import Home from "./pages/Home";
import CardPlace from "./components/CardPlace";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // COOKIES

  const setUser = (token, userId) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
      Cookies.set("userId", userId, { expires: 10 });
      setUserToken(token);
      setUserId(userId);
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
      setUserToken(null);
      setUserId(null);
    }
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userToken={userToken}
                setName={setName}
                name={name}
                setLimit={setLimit}
                limit={limit}
                type={type}
                setType={setType}
                // userId={userId}
              />
            }
          />
          <Route path="/places/:placeId" element={<CardPlace />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
