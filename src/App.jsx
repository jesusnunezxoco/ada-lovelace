import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
