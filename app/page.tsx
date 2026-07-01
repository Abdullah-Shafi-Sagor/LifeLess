import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
}