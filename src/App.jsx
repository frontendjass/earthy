import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className='bg-mosswood-200 '>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <main className='px-6 md:px-16'>
          <Hero />
          <AboutUs />
          <Services />
          <div className='h-20'></div>
        </main>
      </div>
    </div>
  );
}

export default App;
