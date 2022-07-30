import {Login, Signup, Welcome} from "./components";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<div>404 Page Not Found!</div>} />
    </Routes>
    </div>
  );
}

export default App;
