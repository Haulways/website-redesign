import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/styling/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from "./components/Loader";
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
    <section className="grascope-body-section xui-text-white">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>No Match</h1>} />
        </Routes>
      </Suspense>
    </section>
    <Footer />
    </>
  )
}

export default App
