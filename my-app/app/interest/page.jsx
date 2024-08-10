"use client";

import { motion } from "framer-motion";
import React, { useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";
const interests = [
    {
        num: "01",
        category: "competitive programming",
        title: "Competitive Programming",
        description: "Saya mulai mendalami Competitive Programming sejak awal masuk kuliah. Saya bergabung dengan tim Crispy MSG (Chris, Ian, Mike)",
        image: "/cp.png",
    },
    {
        num: "02",
        category: "bridge",
        title: "Bridge",
        description: "Ketika masuk ke ITB, saya tertarik dan mengikuti organisasi Unit Aktivitas Bridge, dan mengikuti lomba Bridge. Still workin' on it.",
        image: "/bridge.jpg",
    },
];

const Interest = () => {
    const [interest, setInterest] = useState(interests[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setInterest(interests[currentIndex]);
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
                            {interest.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none 
                        text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {interest.category} 
                        </h2>
                        <p className="text-white/60">
                            {interest.description}
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
                            {interests.map((interest, index)=>{
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center 
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                            </div>
                                            {/* image */}
                                            <div>
                                                <Image src={interest.image} fill className="object-cover" alt=""/>
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
export default Interest;