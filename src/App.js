import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen flex h-auto flex-col bg-primary">
        <Header></Header>
        <main className='mt-24 p-8 w-full'>Main
          <Routes>
            <Route path='/' element={<MainContainer></MainContainer>}></Route>
            <Route path='/createItem' element={<CreateContainer></CreateContainer>}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>

  );
}

export default App;
