import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addbanner from "./components/Addbanner";
import Addlogo from "./components/Addlogo";
import Addteammember from "./components/Addteammember";
import Allhome from "./components/Allhome";
import DashBoard from "./components/DashBoard";
import Editpage from "./components/Editpage";
import Manageall from "./components/Manageall";

function App() {
  AOS.init();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Allhome />}></Route>
        <Route path="/home" element={<Allhome />}></Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="addlogo" element={<Addlogo />} />
          <Route path="addbaner" element={<Addbanner />} />
          <Route path="addmember" element={<Addteammember />} />
          <Route path="manage" >
            <Route path="manageall" element={<Manageall />}></Route>
          </Route>
        </Route>
        <Route path="/edit/:id" element={<Editpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;