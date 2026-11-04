// Header.jsx
import '../index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Header() {

// 1. Check localStorage when the component first loads
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' || 
               document.documentElement.classList.contains('dark');
    });

    // 2. Toggle state, update the HTML class, and save to localStorage
    const toggleDarkMode = () => {
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);
        
        if (nextMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
	
  return (
    <header>
	<nav className = "navigation" id = "navigation">
        <ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>			
			<li><Link to="/faq">FAQ</Link></li>
				<li class="dropdown">
					Portfolio
						<ul class="dropdown-content">
							<li><Link to="/dev">Full Stack Dev</Link></li>
							<li><Link to="/cosindex">Cosplay & Art</Link></li>
						</ul>  
				</li>
			<li>
				<button onClick={toggleDarkMode}>
					<i className={isDarkMode ? "fa fa-sun" : "fa fa-moon"}></i> 
				</button>
			</li>
		</ul>		
	</nav>
    </header>
  );
}



