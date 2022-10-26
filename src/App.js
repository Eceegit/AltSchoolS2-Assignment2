import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Error404Page from './components/Error404Page';
// import ErrorBoundary from './components/ErrorBoundary';
// import { ErrorBoundary } from 'react-error-boundary';
import FirstUser from './components/FirstUser';
import Home from './components/Home';
import SecondUser from './components/SecondUser';
import Users from './components/Users';


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} >
              <Route path='firstUsers' element={<FirstUser/> } />
              <Route path='secondUsers' element={<SecondUser/> } />
            </Route>
            <Route path='*' element={<Error404Page />} />
          </Routes>
    </div>
  );
}

export default App;
