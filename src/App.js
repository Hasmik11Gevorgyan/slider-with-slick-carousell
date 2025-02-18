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
    <div className="bg-gray-100 h-screen w-3/4">
      <TodoList />
    </div>
  );
}

const data = [
  {
    image: "https://tse1.mm.bing.net/th?id=OIP._O9KuVrmNDv0d6xwd4rLHgHaFo&pid=Api&P=0&h=220",
    name: "John Doe",
    description: "Software engineer with a passion for machine learning and AI. Enjoys hiking and reading."
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg",
    name: "Emily Smith",
    description: "Marketing specialist with a knack for digital campaigns. Loves traveling and photography."
  },
  {
    image: "https://i.pinimg.com/originals/22/2b/5a/222b5ae2f7b5f71edf869141fb3d8e3a.jpg",
    name: "Michael Brown",
    description: "Financial analyst who enjoys analyzing market trends. Enthusiastic about cycling and cooking."
  },
  {
    image: "https://cdn.acidcow.com/pics/20130205/nice_girls_26.jpg",
    name: "Sarah Johnson",
    description: "Graphic designer with a passion for minimalist art. Enjoys painting and playing the piano."
  },
  {
    image: "https://cdn.acidcow.com/pics/20130429/nice_girls_15.jpg",
    name: "David Wilson",
    description: "Journalist covering technology and innovation. Avid runner and coffee enthusiast."
  },
  {
    image: "https://cdn.acidcow.com/pics/20130409/random_cute_girls_40.jpg",
    name: "Jessica Lee",
    description: "UX designer focused on creating intuitive user experiences. Enjoys yoga and meditation."
  },
  {
    image: "https://tse3.mm.bing.net/th?id=OIP.u8DAujXx_JaQUQfiy5SrmQHaJQ&pid=Api&P=0&h=220",
    name: "Alex Martinez",
    description: "Civil engineer passionate about sustainable infrastructure. Enjoys hiking and woodworking."
  },
  {
    image: "https://img.izismile.com/img/img6/20130719/640/beautiful_girls_make_the_world_go_around_640_high_37.jpg",
    name: "Samantha White",
    description: "Lawyer specializing in corporate law. Enjoys playing tennis and volunteering at animal shelters."
  },
  {
    image: "https://i.pinimg.com/originals/f6/cf/78/f6cf78cb24feb9a467a634541df47cb8.jpg",
    name: "Kevin Adams",
    description: "Architect with a focus on eco-friendly designs. Enjoys traveling and sketching landscapes."
  },
  {
    image: "https://i.pinimg.com/originals/ee/49/56/ee49560df0dd49911faf3964c709c0bf.jpg",
    name: "Rachel Taylor",
    description: "Pediatrician dedicated to children's health. Enjoys gardening and playing the violin."
  }
];



