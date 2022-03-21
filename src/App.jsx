import Header from "./components/header/index";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import headerImg from "./assets/header.png"
function App() {
  return (
    <div>
      <Header>
        <Hero img={headerImg} />
      </Header>
      <Footer />
    </div>
  );
}

export default App;
