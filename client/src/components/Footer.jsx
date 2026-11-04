// src/components/Footer.jsx
import { useState, useEffect } from 'react';

export default function Footer() {
  const [lastUpdate, setLastUpdate] = useState("Loading...");

  useEffect(() => {
    // TO DO Code function
    setLastUpdate(new Date().toLocaleDateString());
  }, []);

  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Jennifer Matheson</p>
      
      <div className="footer-info">
        Last updated: <span id="last-update">{lastUpdate}</span><br />
        Icons provided by: <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">Font Awesome</a><br />
        Contact: <a href="mailto:jennifer@jennythepirate.com" target="_blank" rel="noreferrer">jennifer@jennythepirate.com</a>
      </div>

      <div className="social-links">
        <a href="https://www.facebook.com/jennythedreadpirateroberts" target="_blank" rel="noreferrer">
          <span className="fa fa-brands fa-facebook"></span>
        </a>
        <a href="https://github.com/jennythepirate" target="_blank" rel="noreferrer">
          <span className="fa fa-brands fa-github"></span>
        </a>  
        <a href="https://www.freecodecamp.org/jenjenjen7" target="_blank" rel="noreferrer">
          <span className="fa fa-brands fa-free-code-camp fa-freecodecamp"></span>
        </a>
        <a href="https://www.instagram.com/jennythepirate/" target="_blank" rel="noreferrer">
          <span className="fa fa-brands fa-instagram"></span>
        </a>
        <a href="https://www.pinterest.com/jennythepirate/" target="_blank" rel="noreferrer">
          <span className="fa fa-brands fa-pinterest"></span>
        </a>
      </div>
    </footer>
  );
}
