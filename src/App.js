import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

 export default function App() {
  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:3,
    slidetoScroll:3
  }
  return (
    <div className='w-3/4 mt-10 flex justify-center items-center'>
      <div className="mp-20 w-[350px] ">
        <Slider {...settings}>
  {data.map((d) =>(
    <div className="bg-white h-[450px] text-black rounded-xl">
     <div className=" h-55 rounded-t-xl bg-indigo-700 flex justify-center items-center">
     <img src={d.image}  alt="img1" className="h-44 w-44 rounded-full"/>
     </div>
     <div className="flex flex-col justify-center items-center gap-4">
       <p className="text-xl font-semibold"> {d.name} </p>
       <p> {d.description}</p>
       <button className="bg-indigo-500 text-white text-lg px-6 py-2 rounded-xl"> Read more</button>
     </div>
     
    </div>
  ))}
  </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    description: "Software engineer with a passion for machine learning and AI. Enjoys hiking and reading."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Emily Smith",
    description: "Marketing specialist with a knack for digital campaigns. Loves traveling and photography."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Michael Brown",
    description: "Financial analyst who enjoys analyzing market trends. Enthusiastic about cycling and cooking."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sarah Johnson",
    description: "Graphic designer with a passion for minimalist art. Enjoys painting and playing the piano."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "David Wilson",
    description: "Journalist covering technology and innovation. Avid runner and coffee enthusiast."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jessica Lee",
    description: "UX designer focused on creating intuitive user experiences. Enjoys yoga and meditation."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alex Martinez",
    description: "Civil engineer passionate about sustainable infrastructure. Enjoys hiking and woodworking."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Samantha White",
    description: "Lawyer specializing in corporate law. Enjoys playing tennis and volunteering at animal shelters."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Kevin Adams",
    description: "Architect with a focus on eco-friendly designs. Enjoys traveling and sketching landscapes."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Rachel Taylor",
    description: "Pediatrician dedicated to children's health. Enjoys gardening and playing the violin."
  }
];



