import {Login, Signup} from "./components";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
