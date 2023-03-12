import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import BlogPage from "./components/BlogPage";
import TechPage from "./components/TechPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";

// router 구성
// root url: main page component
// tech url : tech page component
// blog url : blog page component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/tech"} element={<TechPage />}>
            <Route path="javascript" element={<JavaScriptPage />} />
            <Route path="react" element={<ReactPage />} />
            <Route path="react/:docId" element={<ReactDocPage />} />
          </Route>
          <Route path={"/blog"} element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
