import './App.css';
import Sidebar from './components/SidebarSection';
import Main from './components/MainSection';
import React from 'react';
function App() {
  const [isOpen, setisOpen] = React.useState(false);

  const toggleFun = () => {
    setisOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <>
      <div className='flex min-h-screen'>
        <Sidebar isOpen={isOpen}/>
        <Main toggleFun={toggleFun} isOpen={isOpen}/>
      </div>
    </>
  );
}

export default App;
