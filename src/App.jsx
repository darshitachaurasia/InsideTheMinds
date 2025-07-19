
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  

  return (
    <div className="w-full min-h-screen  text-center bg-[#F1F0EB] ">
      {/* Fixed Header */}
      <Header />
    
      {/* Content area below header */}
     <HeroSection/>
    </div>
  );
}

export default App;
