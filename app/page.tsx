import Navbar from "./components/navbar"
import Header from "./components/header"
import Services from "./components/services"
import Demo from "./components/demo"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Demo />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
