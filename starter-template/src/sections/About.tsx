"use client"; // for framer motion
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";



 const toolboxItems = [
    {
       title : 'javaScript',
       iconType : JavaScriptIcon ,
    },
    {
      title : 'HTML 5',
      iconType : HTMLIcon ,
    },
    {
      title : 'CSS 3',
      iconType : CSSIcon ,
    },
    {
      title : 'React',
      iconType : ReactIcon ,
    },
    {
      title : 'Chrome',
      iconType : ChromeIcon ,
    },
    {
      title : 'Github',
      iconType : Github ,
    },

 ]

 const hobbies = [
   {
     title : 'painting',
     emoji : '🎨',
     left : '5%',
     top : '5%',
   },
   {
    title : 'photography',
    emoji : '📷',
    left : '50%',
    top: '5%',
  },
  {
    title : 'Hiking',
    emoji : '🥾',
    left : '35%',
    top: '40%',
  },
  {
    title : 'Gaming',
    emoji : '🎮',
    left : '10%',
    top: '35%',
  },
  {
    title : 'Music',
    emoji : '🎵',
    left : '70%',
    top: '45%',
  },
  {
    title : 'Martial Art',
    emoji : '🥋',
    left : '5%',
    top: '65%',
  },
  {
    title : 'Reading',
    emoji : '📖',
    left : '45%',
    top : '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div className="py-20 lg:py-28">
   <div className="container">
      <SectionHeader 
      eyebrow="About Me" 
      title="A Glimpse Into My World" 
      description="Learn more about who i am , what i do and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools i use  to craft exceptional digital experiencies" className="px-6 pt-6" />
            <ToolboxItems items = {toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items = {toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my interest and hobbies beyond the digital realm" className="px-6 py-6" />
            <div className="relative flex-1" ref = {constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left : hobby.left,
                  top : hobby.top,
                }} drag dragConstraints = {constraintRef} >
                  <span className="text-gray-950 font-medium"> {hobby.title} </span>
                  <span> {hobby.emoji} </span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full after:content-['']
              after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className=" absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
                <div className=" absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"></div>
                <Image src={smileEmoji} alt="smiling emoji" className="size-20" />
              </div>
          </Card>
        </div>
      </div>
   </div>
  </div>
  
);
};
