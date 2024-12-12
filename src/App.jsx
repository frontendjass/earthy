import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-mosswood-200'>
      <Navbar />
      <main className='px-6'>
        <Hero />
        <div className='h-20'></div>
      </main>
    </div>
  );
}

export default App;
