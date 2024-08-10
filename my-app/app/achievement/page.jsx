"use client";

import { motion } from "framer-motion";
import React, { useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";
const achievements = [
    {
        num: "01",
        category: "4th Place",
        description: "Schematics National Logic Competition 2022",
        image: "/nlc.jpg",
    },
    {
        num: "02",
        category: "3rd Place",
        description: "PHI 2022 National Mathematics Olympiad",
        image: "/phi.jpg",
    },
];

const Achievement = () => {
    const [achievement, setAchievement] = useState(achievements[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setAchievement(achievements[currentIndex]);
    };

    return (
        <motion.section 
        initial={{opacity:0}} 
        animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:"easeIn"}}} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col
                    xl:justify-between">
                        <div className="text-8xl leading-none font-extrabold text-outline">
                            {achievement.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none 
                        text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {achievement.category} 
                        </h2>
                        <p className="text-white/60">
                            {achievement.description}
                        </p>
                        <div className="border border-white/20">

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange = {handleSlideChange}
                        >
                            {achievements.map((achievement, index)=>{
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center 
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                            </div>
                                            {/* image */}
                                            <div>
                                                <Image src={achievement.image} fill className="object-cover" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slide button */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>

    )
};
export default Achievement;