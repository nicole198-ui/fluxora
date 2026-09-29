import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Funcionalidades from "@/components/Funcionalidades";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Beneficios/>
      <Funcionalidades/>
      <Contato/>
      <Footer/>
    </main>
  );
}