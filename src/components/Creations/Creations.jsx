import React from 'react'

import Button from "@components/Btn/Button.jsx";

import earthM from "@assets/mobile/image-deep-earth.jpg";
import earthD from "@assets/desktop/image-deep-earth.jpg";
import arcadeM from "@assets/mobile/image-night-arcade.jpg";
import arcadeD from "@assets/desktop/image-night-arcade.jpg";
import curiosityM from "@assets/mobile/image-curiosity.jpg";
import curiosityD from "@assets/desktop/image-curiosity.jpg";
import fishM from "@assets/mobile/image-fisheye.jpg";
import fishD from "@assets/desktop/image-fisheye.jpg";
import aboveM from "@assets/mobile/image-from-above.jpg";
import aboveD from "@assets/desktop/image-from-above.jpg";
import gridM from "@assets/mobile/image-grid.jpg";
import gridD from "@assets/desktop/image-grid.jpg";
import pocketM from "@assets/mobile/image-pocket-borealis.jpg";
import pocketD from "@assets/desktop/image-pocket-borealis.jpg";
import soccerM from "@assets/mobile/image-soccer-team.jpg";
import soccerD from "@assets/desktop/image-soccer-team.jpg";

export const images = [
   {
      id: 1,
      mobileImg: earthM,
      desktopImg: earthD,
      text: "deep <br/> earth",
      alt: "earth",
   },
   {
      id: 2,
      mobileImg: arcadeM,
      desktopImg: arcadeD,
      text: "night<br/> arcade",
      alt: "arcade",
   },
   {
      id: 3,
      mobileImg: soccerM,
      desktopImg: soccerD,
      text: "soccer<br/> team vr",
      alt: "soccer player",
   },
   {
      id: 4,
      mobileImg: gridM,
      desktopImg: gridD,
      text: "the <br/>grid",
      alt: "race car",
   },
   {
      id: 5,
      mobileImg: aboveM,
      desktopImg: aboveD,
      text: "from up<br/> above vr",
      alt: "ariel view of twisting road",
   },
   {
      id: 6,
      mobileImg: pocketM,
      desktopImg: pocketD,
      text: "pocket<br/> borealis",
      alt: "borealis",
   },
   {
      id: 7,
      mobileImg: curiosityM,
      desktopImg: curiosityD,
      text: "the<br/> curiosity",
      alt: "mars rover",
   },
   {
      id: 8,
      mobileImg: fishM,
      desktopImg: fishD,
      text: "make it<br/> fisheye",
      alt: "fisheye",
   },
];

const Creations = () => {
  return (
   <section id="creations" class="creations mb-24">
   <div class="section-container">
     <div class="flex flex-col lg:flex-row  md:justify-between">
       <h2 class="text-center text-3xl lg:text-5xl uppercase mb-12">our creations</h2>
       <Button isMobile={false} />
     </div>
      
     <div class="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:justify-items-center  ">
       {images.map((item) => (
         <div class="stacked text-center group relative overflow-hidden  ">
           <img
           src={item.mobileImg}
           alt={item.alt}
           class=" inline-block md:hidden lg:hidden xl:hidden"
           />
           <img
           src={item.desktopImg}
           alt={item.alt}
           class=" hidden md:block  duration-200  group-hover:scale-110"
           />
           <div class="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
           
           <h4 class="self-end justify-self-start text-left  text-2xl uppercase text-white duration-200 group-hover:scale-110 group-hover:text-black p-4 z-10" dangerouslySetInnerHTML={{ __html: item.text }}></h4>
         </div>
       ))}
     <Button isMobile={true} />
     </div>
   </div>
 </section>
  )
}

export default Creations