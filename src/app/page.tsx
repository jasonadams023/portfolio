import Skills from './skills';
import Navbar from './navbar';
import Header from './header';
import Portfolio from './portfolio';
import About from './about';

function Contact() {
  return null;
}

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
