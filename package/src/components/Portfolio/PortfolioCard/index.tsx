
import { useState, useEffect } from 'react';
import React, { FC } from "react";
import Image from "next/image";
import { Portfolio } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
    const { title, coverImage, type, excerpt, date, slug } = portfolio;
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardClick = () => {
        if (isMobile) {
            setIsOverlayVisible(!isOverlayVisible);
        }
    };
    return (
        <div
            onClick={handleCardClick}
            className="relative w-full overflow-hidden rounded-xl shadow-md group cursor-pointer"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={portfolio.coverImage}
                    alt={portfolio.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                />

                {/* Hover/Tap Overlay */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end justify-center z-10">
                    <div
                        className={`
                 w-full bg-black/60 text-white px-4 py-4 text-center transition duration-500 ease-out rounded-t-xl
                 ${isMobile
                                ? isOverlayVisible
                                    ? 'translate-y-0'
                                    : 'translate-y-[200px]'
                                : 'md:translate-y-[200px] md:group-hover:translate-y-0'}
               `}
                    >
                        <h3 className="text-lg font-semibold">{portfolio.title}</h3>
                        <Link
                            href={`/portfolio/${portfolio.slug}`}
                            className="mt-2 inline-block bg-white text-black text-sm font-medium px-4 py-1 rounded hover:bg-gray-100 transition"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
