import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Edit from "./pages/Edit";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
