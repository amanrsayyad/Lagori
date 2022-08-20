import React, { Suspense, lazy } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Wa from './pages/Wa';
import AboutUs from './pages/AboutUs';
import Call from './pages/Call';
const Home = lazy(() =>  import("./pages/Home"));
const Tourism = lazy(() => import('./component/Tourism/Tourism'));
const Gallery = lazy(() => import('./component/Gallery/Gallery'));
const PageNotFound = lazy(() =>  import('./component/PageNotFound/PageNotFound'));
const Activities = lazy(() =>  import('./component/Activities/Activities'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wa />
        <Call />

        <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Tourism />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      </Router>
    </div>
  );
}

export default App;
