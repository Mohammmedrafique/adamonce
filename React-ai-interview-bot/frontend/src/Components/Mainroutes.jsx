import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chatpage from "./Chatpage";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chatpage" element={<Chatpage />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
