import { getPortfolioBySlug } from "@/utils/portfolioMarkdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const portfolio = getPortfolioBySlug(params.slug, ["title"]);
  return {
    title: `${portfolio?.title || "Portfolio"} | My Site`,
  };
}

export default async function PortfolioDetails({ params } :any) {
  const portfolio = getPortfolioBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "type",
  ]);
  const content = await markdownToHtml(portfolio.content || "");

  return (
    <>
      <section className="relative pt-44 z-1 pb-20 dark:bg-dark dark:bg-darkmode">
        <div className="w-full h-full absolute -z-1 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-search"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text font-medium dark:text-white pr-7 border-r border-solid border-grey dark:border-white">
                  {format(new Date(portfolio.date), "dd MMM yyyy")}
                </span>
                <span className="text-base text-midnight_text font-medium dark:text-white sm:pl-7">
                  {portfolio.type}
                </span>
              </div>
              <h2 className="text-midnight_text dark:text-white text-[40px] leading-tight font-bold pt-7">
                {portfolio.title}
              </h2>
            </div>
            <div className="flex items-center md:justify-center col-span-4 pt-4 md:pt-0">
              <Image
                src={portfolio.authorImage || "/images/payment/user.svg"}
                alt="Author"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="ml-4">
                <span className="text-[22px] font-bold text-midnight_text dark:text-white">
                  {portfolio.author || "Author"}
                </span>
                <p className="text-xl text-gray dark:text-white">Project Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 dark:bg-darkmode">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mb-16 overflow-hidden rounded-3xl">
                <Image
                  src={portfolio.coverImage}
                  alt={portfolio.title}
                  width={1170}
                  height={766}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 lg:w-8/12">
                  <div className="blog-details markdown xl:pr-10">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
                {/* <div className="w-full px-4 lg:w-4/12">
                  <div className="-mx-4 mb-8 flex flex-col">
                    <div className="w-full py-12 px-11 bg-white dark:bg-dark_b shadow-lg border-b-2 border-border dark:border-dark_border rounded-t-lg">
                      <h2 className="mb-5 text-2xl dark:text-white text-black sm:text-3xl">Share</h2>
                      <div className="flex gap-4 flex-col">
                        <Link href="#" className="bg-[#526fa3] py-4 px-6 text-20 rounded-lg flex items-center text-white">Facebook</Link>
                        <Link href="#" className="bg-[#46C4FF] py-4 px-6 text-20 rounded-lg flex items-center text-white">Twitter</Link>
                        <Link href="#" className="bg-[#3C86AD] py-4 px-6 text-20 rounded-lg flex items-center text-white">LinkedIn</Link>
                      </div>
                    </div>
                    <div className="w-full py-12 px-11 bg-white dark:bg-dark_b shadow-lg rounded-b-lg">
                      <p className="text-24 mb-4">Join our Newsletter</p>
                      <input
                        placeholder="Email address"
                        className="p-3 dark:bg-search border border-border dark:border-dark_border rounded-lg mb-2 w-full"
                      />
                      <button className="bg-primary w-full px-7 text-white border border-primary py-4 rounded-sm hover:bg-transparent hover:text-primary">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
