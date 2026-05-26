import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features/>

        <Products />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
