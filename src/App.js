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
  const [setToken] = useState(Cookies.get("token") || null);
  // const [user, setUser] = useState(Cookies.get("userId") || null);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  // COOKIES

  const setUser = (token, user) => {
    if (token) {
      Cookies.set("token", token, { expires: 1 });
      Cookies.set("userId", user, { expires: 7 });
      setToken(token);
      setUser(user);
    } else {
      Cookies.remove("token");
      Cookies.remove("userId");
      setToken(null);
      setUser(null);
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
                setName={setName}
                name={name}
                setLimit={setLimit}
                limit={limit}
                skip={skip}
                setSkip={setSkip}
                type={type}
                setType={setType}
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
