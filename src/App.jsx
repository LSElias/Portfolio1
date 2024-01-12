import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./_main/MainLayout";
import InfoLayout from "./_InfoLayout/InfoLayout";
import AboutMe from "./_InfoLayout/pages/AboutMe"
import Projects from "./_InfoLayout/pages/Projects";
import Contact from "./_InfoLayout/pages/contact";
import GreenWallet from "./_InfoLayout/pages/Projects-Pages/GreenWallet"
import Hardtech from "./_InfoLayout/pages/Projects-Pages/Hardtech"
import Formation from './_InfoLayout/pages/Formation'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>

        <Route element={<InfoLayout/>}>
        <Route path="/about-me" element={<AboutMe/>}   />
        <Route path="/formation" element={<Formation/>}/>
        <Route path="/contact" element={<Contact/>}   />
        <Route path="/about-me" element={<AboutMe/>}   />

        <Route path="/projects" element={<Projects/>}>
          <Route path="/projects/greenwallet" element={<GreenWallet/>}></Route>
          <Route path="/projects/hardtech" element={<Hardtech/>}></Route>
        </Route>

        </Route>

      </Routes>

    </>
  );
}

export default App;
