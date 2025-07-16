import React, { FC } from "react";
import Image from "next/image";
import { Portfolio } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
    const { title, coverImage, type, excerpt, date, slug } = portfolio;
    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-md group">
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={portfolio.coverImage}
                    alt={portfolio.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                />

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end justify-center">
                    <div className="w-full bg-black/60 text-white px-4 py-4 text-center transform translate-y-[200px] group-hover:translate-y-0 transition duration-500 ease-out rounded-t-xl">
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
