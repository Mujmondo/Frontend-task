import {Login, Signup, Welcome} from "./components";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App overflow-x-hidden">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Welcome />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<div>404 Page Not Found!</div>} />
    </Routes>
    </div>
  );
}

export default App;
