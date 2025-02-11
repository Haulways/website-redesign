import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './assets/styling/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from "./components/Loader";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Company = lazy(() => import('./pages/Company'));
const COWorkspace = lazy(() => import('./pages/COWorkspace'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/contact';

  return (
    <>
      <section className="grascope-body-section xui-text-white">
        {!hideNavFooter && <Navbar />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/company' element={<Company />} />
            <Route path='/co-workspace' element={<COWorkspace />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>No Match</h1>} />
          </Routes>
        </Suspense>
      </section>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
