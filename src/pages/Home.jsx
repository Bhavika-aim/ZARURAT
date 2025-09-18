// src/pages/Home.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import zaruratLogo from "../assets/zarurat-logo.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2500}>
        <div>
          <img src="/images/slider1.jpg" alt="Teaching Session" />
          <p className="legend">Empowering Through Education</p>
        </div>
        <div>
          <img src="/images/slider2.jpg" alt="Event Celebration" />
          <p className="legend">Spreading Joy, One Smile at a Time</p>
        </div>
        <div>
          <img src="/images/slider3.jpg" alt="Zarurat Kids" />
          <p className="legend">Building Brighter Futures</p>
        </div>
      </Carousel>

      <section className="text-center p-10 bg-purple-50">
        <div className="flex flex-col items-center gap-4">
          <img src={zaruratLogo} alt="Zarurat Logo" className="w-20 h-20 rounded-full border-2 border-orange-500" />
          <h1 className="text-4xl font-bold text-orange-600">Zarurat</h1>
          <p className="max-w-3xl text-gray-700 text-base">
            Zarurat is a student-run social initiative by JECRC Foundation, dedicated to educating and empowering underprivileged children.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-6 p-6 bg-white text-center">
        {[
          { title: "About Us", link: "/about", color: "bg-purple-100" },
          { title: "Our Events", link: "/events", color: "bg-yellow-100" },
          { title: "Our Impact", link: "/impact", color: "bg-green-100" },
          { title: "Donate", link: "/donate", color: "bg-pink-100" },
        ].map(({ title, link, color }) => (
          <Link key={title} to={link} className={`p-6 rounded-xl shadow-md hover:scale-105 transition-all ${color}`}>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
