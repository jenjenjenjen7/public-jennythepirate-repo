import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../index.scss';
import weatherApp from '../assets/littleorangeweatherapp.png';
import cosplayApp from '../assets/cosplayportfolioapp.png';

export default function Main() 
{

  
	return (
		<main className="main">
			<article className="feature-item">
				<figure>
					<img src={weatherApp} alt="Screenshot of a weather app" loading="lazy" />
				</figure>
				<div>
					<h1>Little Orange Weather App</h1>
					<h4>CSS3 | node.js | openweather API<br />
					<a href= "https://orangeweatherapp.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a><br />
					<a href= "https://github.com/jenjenjenjen7/weather-app" target="_blank" rel="noopener noreferrer">Git Hub</a>
					</h4>
					<p>
					A weather app project I did for FreeCodeCamp in 2018. Styled after the local forecast  											 from The Weather Channel of the early 90's.
					</p> 
				</div>
			</article>
			<article className="feature-item">
				
				<div>
					<h1>Cosplay Portfolio App</h1>
					<h4>PostgreSQL | Express.js | React | Node.js | SCSS<br />
					<Link to="/cosindex">Live Demo</Link>
					</h4>
					<p>
					A full stack app to sort and display my cosplay creations over the years. 
					</p> 
				</div>
				<figure>
					<img src={cosplayApp} alt="Screenshot of a cosplay portfolio" loading="lazy" />
				</figure>
			</article>
		</main>
	);
}
