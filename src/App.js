import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import CreatePost from "./components/createpost/CreatePost";
import Login from "./components/LoginRegister/Login";
import PostList from "./components/PostList/PostList";
import TestBar from "./components/TestBar";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";
import { PostContextProvider } from "./context/PostContext";
import { ContextProvider, LoginUserContext, IsLoginContext } from "./context/Context";
import Register from "./components/LoginRegister/Register";
import Mainpage from "./components/Main/Mainpage";
import ModifyPost from "./components/modifypost/ModifyPost";
import { useEffect, useContext, useState } from "react";


const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #bcbcbc;
  }
  body{
    margin: 0;
    background: white;
  }
  a {
    text-decoration: none;
  }
  a:link, a:visited, a:hover, a:active {
    color: black;
  }
`;

function App() {
  // const { loginUser } = useContext(LoginUserContext) || {};
  // const { isLogin, setIsLogin } = useContext(IsLoginContext) || {};

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('LoginUserInfo') === null) {
      setIsLogin(false);
    }
    else {
      setIsLogin(true);
    }
  });

  return (
    <PostContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <TestBar isLogin={isLogin}/>
          <Routes>
            <Route path="/" exact={true} element={<Mainpage isLogin={isLogin} setIsLogin = {setIsLogin}/>}></Route>
            <Route path="/login" element={<Login isLogin={isLogin}/>}></Route>
            <Route path="/register" element={<Register isLogin={isLogin}/>}></Route>
            <Route path="/:category" element={<PostList isLogin={isLogin}/>}></Route>
            <Route path="/:category/:id" element={<Post isLogin={isLogin}/>}></Route>
            <Route path="/createpost" element={<CreatePost isLogin={isLogin}/>}></Route>
            <Route
              path="/:category/:id/modifypost"
              element={<ModifyPost isLogin={isLogin}/>}
            ></Route>
          </Routes>
          <Footer isLogin={isLogin}/>
        </BrowserRouter>
      </ContextProvider>
    </PostContextProvider>
  );
}

export default App;
