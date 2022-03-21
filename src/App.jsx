import Header from "./components/header/index";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import headerImg from "./assets/header.png"
import SectionTitle from "./components/SectionTitle";
function App() {
  return (
    <div>
      <Header>
        <Hero img={headerImg} pageTitle="Technology For An Inclusive World"/>
      </Header>
      <main id="main">
        <section>
    <SectionTitle title={"Our Mission"}/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel magna id, fringilla efficitur enim. Quisque luctus vehicula odio vel eleifend. Proin elementum sit amet turpis vitae blandit.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
