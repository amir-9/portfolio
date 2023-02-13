import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Skills, Header, Work, Testimonials } from "./container";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;