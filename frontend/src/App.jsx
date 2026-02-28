import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Letter from "./pages/Apology";
import Forgive from "./pages/Forgive"; 

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/forgive" element={<Forgive />} />
      </Routes>
 
  );
}

export default App;