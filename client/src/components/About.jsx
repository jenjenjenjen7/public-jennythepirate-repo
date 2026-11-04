// src/components/About.jsx
import React from 'react';
import '../index.scss';
import profilePic from '../assets/matchy.jpg';

export default function Main() {

  return (
    <main className="main">
      <article className="feature-item">
        <figure>
          <img src={profilePic} alt="Jennifer - Profile Photo" loading="lazy" />
          <figcaption>My most recent selfie.</figcaption>
        </figure>
        
        <div>
          <h1>About Jennifer</h1>
          <h4>full stack developer | cosplayer | jennythepirate</h4>
          <p>
            Jennifer has been going by jennythepirate online for several years. 
            The username is a Princess Bride and Three Penny Opera reference. 
            (There will be more here, this is kind of a place holder.)
          </p> 
        </div>
      </article>
    </main>
  );
}
