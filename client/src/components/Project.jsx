import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProjectTemplate() {
  const { slug } = useParams();
  const [costume, setProject] = useState(null);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    // Fetch from backend 
    fetch(`${API_BASE}/api/costume`)
      .then(res => res.json())
      .then(data => {
      	const foundProject = Array.isArray(data)
      	? data.find(item=> item.slug === slug)
      	: data;
      	
      	setProject(foundProject);
      })
      .catch(err => console.error('Error fetching project data:', err));
  }, [slug]);

  if (!costume) return <div>Loading...</div>;

  return (
	<main>
		<article className="feature-item">
			<figure>
				<img src = {`/${costume.image_path}`} />
			</figure>
			<div>
				<h2>Character: {costume.name}</h2>
				<h2>Series: {costume.title}</h2>
				<h3>Date Completed: {costume.date_finished}</h3>
				<h3>Status: {costume.project_status}</h3>
			</div>
		</article>
	</main>
  );
}
