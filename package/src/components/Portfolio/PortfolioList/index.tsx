import React from "react";
import { getAllPortfolios } from "@/utils/portfolioMarkdown";
import { Portfolio } from "@/types/blog";
import PortfolioCard from "../PortfolioCard";

const PortfolioList: React.FC = () => {
    const portfolios: Portfolio[] = getAllPortfolios([
        "title",
        "date",
        "type",
        "excerpt",
        "coverImage",
        "slug",
    ]);

    return (
        <section id="portfolio" className="pt-20 pb-24">
            <div className="container mx-auto px-4 ">
                <div className="grid md:grid-cols-2 gap-12">
                    {portfolios.map((portfolio, i) => (
                        <PortfolioCard key={i} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioList;
