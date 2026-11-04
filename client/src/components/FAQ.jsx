// src/components/FAQ.jsx
import React from 'react';

export default function Main() 
{

	const FAQ_DATA = 
	[
		{
			question: "Why are you learning programming, did you choose it?",
			answer: "My daughter asks assuming that since I hate it so much, it must be something I’m being forced to do. Because I hate myself."
		},
		{
			question: "What was the actual reason?",
			answer: "My brother started making webpages with HTML and I thought it looked fun. I learned it by looking at other people's code mostly, ran it through the validator until it was good. I think the validator taught me HTML."
		},
		{
			question: "The journey so far?",
			answer: "I eventually started a class in C++ but had to quit for a while. Years later I discovered FreeCodeCamp. I started learning JavaScript, felt like something was missing, and went back for an Associate Degree in Programming, which turned into a Bachelor Degree in Information Technology."
		}
	];
  
	return (
		<main className="main">
		<h1>Frequently Asked Questions</h1>
		<div className="faq-list">
			{FAQ_DATA.map((item, index) => (
				<section key={index} className="faq-item">
				<h3>{item.question}</h3>
				<p>{item.answer}</p>
				</section>
			))}
		</div>
		</main>
	);
}
