// src/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            About Ganesh Museum
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            A Journey Through Art and Culture
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-lg text-gray-700">
            The Ganesh Museum was established in 2005 with a vision to celebrate
            and preserve the rich cultural heritage surrounding Lord Ganesh.
            Over the years, the museum has evolved into a hub for art lovers and
            spiritual seekers, showcasing a diverse collection of artifacts that
            depict the various representations of Ganesh across different
            cultures and eras.
          </p>
          <img
            src="idol3.webp"
            alt="Ganesh Museum History"
            className="w-full rounded-lg mb-4 shadow-md"
          />
          <p className="text-lg text-gray-700 mt-4">
            Our founders, inspired by the intricate artistry and profound
            significance of Ganesh in Indian mythology, sought to create a space
            where people could learn, appreciate, and connect with this beloved
            deity. The museum's collection features exquisite sculptures,
            paintings, and installations that tell the story of Ganesh's
            cultural impact throughout history.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Festival Highlights</h2>
          <p className="text-lg text-gray-700 mb-4">
            Each year, during the Ganesh Chaturthi festival, we host an array of
            special events:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Art Workshops: Hands-on sessions to create your own
              Ganesh-inspired art.
            </li>
            <li>
              Storytelling: Engaging narratives about Ganesh’s legends and
              significance.
            </li>
            <li>
              Exhibitions: Unique displays featuring contemporary
              interpretations of Ganesh.
            </li>
          </ul>
          <img
            src="idol1.webp"
            alt="Ganesh Chaturthi Celebration"
            className="w-full rounded-lg mb-4 shadow-md"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us This Festival Season!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We invite you to experience the vibrant spirit of Ganesh Chaturthi
            at the Ganesh Museum! From artistic displays to interactive
            activities, there’s something for everyone.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
