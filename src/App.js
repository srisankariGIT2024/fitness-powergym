import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Joinnow from './Components/JoinNow/Joinnow';
import Footer from './Components/Footer/Footer';
import Results from './Components/Results/Results';

function App() {
    return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Features />      
      <Joinnow />     
      <Results />
      <Footer />
    </>
  );
}

export default App;
