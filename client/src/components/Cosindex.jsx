// src/components/Cosindex.jsx
import '../index.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function CosplayPortfolio() {
	const [allProjects, setAllProjects] = useState([]); // Storage for everything
	const [filteredProjects, setFilteredProjects] = useState([]); // What we actually see
    	const [activeCat, setActiveCat] = useState('All');

    	// Initially render everything
    	useEffect(() => {
        	async function loadProjects() {
            	try {
                	const response = await fetch('/cosplays.json');
                	const data = await response.json();
                
                	// Sorting logic (Latest year first)
                	const sorted = data.sort((a, b) => b.year - a.year);
                
                setAllProjects(sorted);
                setFilteredProjects(sorted);
            	} catch (error) {
                	console.error("Arrrr! The database went overboard!", error);
            }
        }
        loadProjects();
    }, []); //Runs once when page loads

    //Filter by category logic
    const handleFilter = (cat) => {
        setActiveCat(cat);
        if (cat === 'All') {
            setFilteredProjects(allProjects);
        } else {
            const filtered = allProjects.filter(p => p.category === cat);
            setFilteredProjects(filtered);
        }
    };

  return (
	<main>
            <h1>Cosplay Portfolio</h1>
            
            <div id="navigation" className="button-container">
                {["All", "Video Games", "Anime", "Movies and Television"].map(cat => (
                    <button 
                        key={cat}
                        className={`filterbtn ${activeCat === cat ? 'active' : ''}`}
                        onClick={() => handleFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <article className="cosplay-grid" id="cosplay-grid">
                {filteredProjects.map((item) => (
                    <figure className="outfit-card" key={item.slug}>
                        <Link to={`${item.slug}`}>
                            <img src={item.image} alt={item.title} />
                            <figcaption>
                                {item.title} <br /> {item.year}
                            </figcaption>
                        </Link>
                    </figure>
                ))}
            </article>
        </main>
  );
}
