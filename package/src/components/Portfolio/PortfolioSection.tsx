"use client";
import { useReducer } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Portfolio } from "@/types/blog";

import dynamic from "next/dynamic";
import PortfolioCard from "./PortfolioCard";
type Props = {
    portfolios: Portfolio[];
};
const GraphicDesignList = dynamic(() => import("@/components/Portfolio/GraphicDesignList"), { ssr: false });

const PortfolioSection = ({ portfolios }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref);

    const TopAnimation = {
        initial: { y: "-100%", opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
        transition: { duration: 1, delay: 0.4 },
    };

    const bottomAnimation = {
        initial: { y: "100%", opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
        transition: { duration: 1, delay: 0.4 },
    };
    interface State {
        planType: string;
        personalPrice: string;
        professionalPrice: string;
        organizationPrice: string;
        duration: string;
    }
    interface Action {
        type: "Web Design & Development" | "UI/UX & Graphic Design";
        payload: {
            duration: string;
            personalPrice: string;
            professionalPrice: string;
            organizationPrice: string;
        };
    }

    const initialTabConfig: State = {
        planType: "Web Design & Development",
        personalPrice: "Free",
        professionalPrice: "9.00",
        organizationPrice: "18.00",
        duration: "Web Design & Development",
    };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "Web Design & Development":
                return {
                    ...state,
                    planType: action.type,
                    personalPrice: action.payload.personalPrice,
                    professionalPrice: action.payload.professionalPrice,
                    organizationPrice: action.payload.organizationPrice,
                    duration: action.payload.duration,
                };
            case "UI/UX & Graphic Design":
                return {
                    ...state,
                    planType: action.type,
                    personalPrice: action.payload.personalPrice,
                    professionalPrice: action.payload.professionalPrice,
                    organizationPrice: action.payload.organizationPrice,
                    duration: action.payload.duration,
                };
            default:
                return state;
        }
    }

    const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);

    return (
        <>
            <section className="dark:bg-darkmode overflow-hidden py-14">
                <div
                    ref={ref}
                    className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 "
                >
                    <motion.div {...TopAnimation}>
                        <h2 className="dark:text-white text-midnight_text text-center md:text-35 sm:text-28 text-24">
                            Highlights of
                            <span className="text-primary max-w-max ml-2">
                                Our Work
                            </span>
                        </h2>
                        <p className="text-base text-6 font-normal text-muted dark:text-darktext text-center m-auto py-6 lg:max-w-50% sm:max-w-75%">
                            From design to development — we craft digital experiences that convert.
                        </p>
                    </motion.div>
                    <motion.div {...bottomAnimation}>
                        <div className="text-center pb-6">
                            <div className="inline-flex items-center bg-heroBg dark:bg-midnight_text dark:bg-semidark rounded-xl p-2">
                                <button
                                    className={`text-17 font-normal text-midnight_text dark:text-white py-3 px-7 rounded-xl ${tabConfig.planType === "Web Design & Development"
                                        ? "bg-white text-darkmode dark:bg-darkmode"
                                        : ""
                                        }`}
                                    onClick={() =>
                                        dispatch({
                                            type: "Web Design & Development",
                                            payload: {
                                                duration: "Web Design & Development",
                                                personalPrice: "Free",
                                                professionalPrice: "9.00",
                                                organizationPrice: "18.00",
                                            },
                                        })
                                    }
                                >
                                    Web Design & Development
                                </button>
                                <button
                                    className={`text-17 font-normal text-midnight_text dark:text-white py-3 px-7 rounded-xl ${tabConfig.planType === "UI/UX & Graphic Design"
                                        ? "bg-white text-darkmode dark:bg-darkmode"
                                        : ""
                                        }`}
                                    onClick={() =>
                                        dispatch({
                                            type: "UI/UX & Graphic Design",
                                            payload: {
                                                duration: "UI/UX & Graphic Design",
                                                personalPrice: "Free",
                                                professionalPrice: "90.00",
                                                organizationPrice: "180.00",
                                            },
                                        })
                                    }
                                >
                                    UI/UX & Graphic Design
                                </button>
                            </div>
                        </div>
                        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-end mt-12">
                            <div>
                                <p className="pb-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    Monthly service fee
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    Direct debits
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    Online payments
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    Deposits to Savers
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    ATM withdrawals
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    International transaction fees
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    International ATM withdrawal
                                </p>
                                <p className="py-3 border-b border-border dark:border-dark_border text-muted text-17">
                                    Overdrawn interest rate
                                </p>
                            </div>
                            <div className="bg-white dark:bg-midnight_text  pt-8 px-8 rounded-lg border border-border dark:border-dark_border">
                                <h3 className="text-22 font-bold text-midnight_text text-center dark:text-primary">
                                    Personal
                                </h3>
                                <div className="mt-4 flex flex-col items-center">
                                    <p className="text-40 font-medium uppercase text-midnight_text dark:text-white">
                                        {tabConfig.personalPrice}
                                    </p>
                                    <p className="text-base text-midnight_text dark:text-white">
                                        {tabConfig.duration}
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="mt-6 block text-center py-2 text-17 bg-green border-2 border-green hover:bg-transparent hover:text-green duration-300 text-white rounded-lg"
                                >
                                    Try for free
                                </Link>
                                <div className="mt-10 mb-2">
                                    <p className="pb-3 text-muted text-center border-b border-border dark:border-dark_border">
                                        Free
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-danger rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="iconamoon:close-fill"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        *Free
                                    </p>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        *Free
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-danger rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="iconamoon:close-fill"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="border-b border-border dark:border-dark_border py-3 flex justify-center">
                                        <div className="w-5 h-5 bg-danger rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="iconamoon:close-fill"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-danger rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="iconamoon:close-fill"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 text-muted text-center">9.81% P.A.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-midnight_text pt-8 px-8 rounded-lg border border-border dark:border-dark_border">
                                <h3 className="text-22 font-bold text-midnight_text text-center dark:text-primary">
                                    Professional
                                </h3>
                                <div className="mt-4 flex flex-col items-center">
                                    <p className="text-40 font-medium uppercase text-midnight_text dark:text-white">
                                        ${tabConfig.professionalPrice}
                                    </p>
                                    <p className="text-base text-midnight_text dark:text-white">
                                        {tabConfig.duration}
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="mt-6 text-17 block text-center bg-primary border-2 border-primary hover:bg-transparent hover:text-primary duration-300 text-white py-2 rounded-lg"
                                >
                                    Try free for 14 days
                                </Link>
                                <div className="mt-10 mb-2">
                                    <p className="pb-3 border-b dark:border-dark_border border-border text-muted text-center">
                                        Free
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        Free & unlimited
                                    </p>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        Free & unlimited
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        0.5%
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 text-muted text-center">9.81% P.A.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-midnight_text pt-8 px-8 rounded-lg border border-border dark:border-dark_border">
                                <h3 className="text-22 text-center font-bold text-midnight_text dark:text-primary">
                                    Association
                                </h3>
                                <div className="mt-4 flex flex-col items-center">
                                    <p className="text-40 font-medium uppercase text-midnight_text dark:text-white">
                                        ${tabConfig.organizationPrice}
                                    </p>
                                    <p className="text-base text-midnight_text dark:text-white">
                                        {tabConfig.duration}
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="mt-6 text-17 block text-center bg-primary border-2 border-primary hover:bg-transparent hover:text-primary duration-300 text-white py-2 rounded-lg"
                                >
                                    Try free for 14 days
                                </Link>
                                <div className="mt-10 mb-2">
                                    <p className="pb-3 border-b dark:border-dark_border border-border text-muted text-center">
                                        Free
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        Free & unlimited
                                    </p>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        Free & unlimited
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 border-b border-border dark:border-dark_border text-muted text-center">
                                        0.5%
                                    </p>
                                    <div className="py-3 border-b border-border dark:border-dark_border flex justify-center">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Icon
                                                icon="solar:unread-outline"
                                                width="18"
                                                height="18"
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <p className="py-3 text-muted text-center">6% P.A.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="mt-12">
                            {tabConfig.planType === "Web Design & Development" ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-12">
                                        {portfolios.map((portfolio, i) => (
                                            <PortfolioCard key={i} portfolio={portfolio} />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <GraphicDesignList />
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;