import React, { FC } from "react";
import Image from "next/image";
import { Portfolio } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
    const { title, coverImage, type, excerpt, date, slug } = portfolio;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center group">
            <div className="relative">
                <div className="overflow-hidden rounded-lg">
                    <Link
                        href={`/portfolio/${slug}`}
                        aria-label="blog cover"
                        className="block"
                    >
                        <div className="shrink-0 rounded-lg shadow-lg">
                            <div className="overflow-hidden rounded-lg shrink-0">
                                <Image
                                    src={coverImage!}
                                    alt="image"
                                    width={800} // increase width to prevent blur
                                    height={500} // taller height
                                    className="w-full h-[200px] object-cover transition group-hover:scale-110 rounded-lg"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <p className="text-14 sm:text-16 md:text-18 font-medium text-muted leading-loose mb-0">
                    {format(new Date(date), "MMMM dd, yyyy")}
                </p>
                <div className="my-4">
                    <Link
                        href={`/portfolio/${slug}`}
                        className="text-20 sm:text-22 md:text-24 font-medium text-midnight_text dark:text-white group-hover:text-primary"
                    >
                        {title}
                    </Link>
                </div>
                <div>
                    <Link
                        href={`/portfolio/${slug}`}
                        className="text-20 text-primary hover:text-blue-700"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
