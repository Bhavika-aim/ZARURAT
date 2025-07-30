import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        className="max-h-[500px]"
      >
        <div>
          <img src="/images/slider1.jpg" alt="Teaching Session" />
          <p className="legend">Empowering Through Education</p>
        </div>
        <div>
          <img src="/images/slider2.jpg" alt="Event celebration" />
          <p className="legend">Spreading Joy, One Smile at a Time</p>
        </div>
        <div>
          <img src="/images/slider3.jpg" alt="Zarurat kids" />
          <p className="legend">Building Brighter Futures</p>
        </div>
      </Carousel>

      {/* Welcome Section */}
      <section className="text-center p-6 bg-purple-50">
        <h1 className="text-3xl font-bold text-purple-700">Welcome to Zarurat</h1>
        <p className="mt-3 max-w-3xl mx-auto text-gray-700">
          Zarurat is a student-run social initiative by JECRC Foundation, dedicated to educating and empowering underprivileged children. 
          Founded on 20th November 2011, Zarurat continues to nurture young minds every evening from 4:00–5:30 PM, Monday to Saturday.
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="grid md:grid-cols-4 gap-6 p-6 bg-white text-center">
        {[
          { title: "About Us", link: "/about", color: "bg-purple-100" },
          { title: "Our Events", link: "/events", color: "bg-yellow-100" },
          { title: "Our Impact", link: "/impact", color: "bg-green-100" },
          { title: "Donate", link: "/donate", color: "bg-pink-100" },
        ].map(({ title, link, color }) => (
          <Link
            key={title}
            to={link}
            className={`p-6 rounded-xl shadow-md hover:scale-105 transition-all ${color}`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
