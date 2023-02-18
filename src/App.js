import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Skills, Header, Work, Testimonial } from "./container";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
