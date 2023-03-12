import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import BlogPage from "./components/BlogPage";
import TechPage from "./components/TechPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactPage from "./components/ReactPage";

// router 구성
// root url: main page component
// tech url : tech page component
// blog url : blog page component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/tech"} element={<TechPage />}>
          <Route path="javascript" element={<JavaScriptPage />} />
          <Route path="React" element={<ReactPage />} />
        </Route>
        <Route path={"/blog"} element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
