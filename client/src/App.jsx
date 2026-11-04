import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './index.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import profilePic from './assets/matchy.jpg';
import FAQ from './components/FAQ.jsx';
import Cosindex from './components/Cosindex.jsx';
import Project from './components/Project.jsx';
import Dev from './components/Dev.jsx';
import InstagramFeed from './InstagramFeed.jsx';

function App() {
  return (
  <BrowserRouter>
    <div className="app-container">
    	<Header />      
      		<main>
      			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/dev" element={<Dev />} />
				<Route path="/cosindex" element={<Cosindex />} />
				<Route path="/cosindex/:slug" element={<Project />} />
      			</Routes>
      		</main>
      <Footer />  
    </div>
  </BrowserRouter>
  );
}

export default App;
