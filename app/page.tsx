import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ConnectWithMe from "./components/ConnectWithMe"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ConnectWithMe />
      <Footer />
    </main>
  )
}


