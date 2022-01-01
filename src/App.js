import { useEffect, useState } from 'react';
import './App.css';
import { Cover } from './components/cover/Cover';
import { Navbar } from './components/navbar/Navbar';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () =>{
    const position = window.scrollY;
    setScrollHeight(position);
  }

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
  },[scrollHeight])

  return (
    <div className="App">
     <Navbar scrollHeight={scrollHeight}/>
     <Cover/>
    </div>
  );
}

export default App;
