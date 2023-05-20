import Skills from './components/skills/skills';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Contact from './components/contact/contact';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
    </div>
  )
}
