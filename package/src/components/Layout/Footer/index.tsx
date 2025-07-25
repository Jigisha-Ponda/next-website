import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/app/api/data";

const Footer = () => {
  return (
    <footer className="pt-8 mt-14 bg-midnight_text relative after:content-[''] after:absolute after:bg-[url('/images/footer/bgline.png')] after:bg-no-repeat after:w-52 after:h-24 after:right-0 after:top-28 xl:after:block after:hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-2">
        <div className="flex lg:items-center justify-between lg:flex-row flex-col border-b border-dark_border pb-14 mb-16 ">
          <div className="flex sm:flex-nowrap flex-wrap gap-6">
            <div className="flex items-center text-foottext text-16">
              <Icon icon="weui:location-outlined" className="w-7 h-7 mr-3" />
              <div className="flex flex-col">
                <span>401, Pride Classic, Patidar Chowk,</span>
                <span className="mt-1"> Rajkot, Gujarat</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-foottext">
              <Icon icon="ic:baseline-call" className="w-7 h-7" />
              <Link href="tel:+918000027665" className="text-16 hover:text-primary">
                <span>+91 80000 27665</span>
              </Link>
            </div>
            <div className="flex items-center text-foottext gap-2">
              <Icon icon="clarity:email-line" className="w-7 h-7" />
              <Link
                href="mailto:info@emphasissoft.com"
                className="inline-flex items-center text-16 hover:text-primary"
              >
                <span>info@emphasissoft.com</span>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <Link href="mailto:info@emphasissoft.com" className="text-muted hover:text-primary">
              <Icon icon="ic:baseline-email" width="32" height="32" />
            </Link>
            <Link href="https://wa.me/918000027665" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:whatsapp" width="32" height="32" />
            </Link>
            {/* <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fe:facebook" width="32" height="32" />
            </Link> */}
            {/* <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:square-twitter" width="32" height="32" />
            </Link> */}
            <Link href="https://www.linkedin.com/in/emphasis-soft-426a94373/" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:linkedin" width="32" height="32" />
            </Link>
            <Link href="https://www.instagram.com/emphasis_soft/" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:instagram" width="32" height="32" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:mb-16 mb-8 pt-8 gap-4 relative before:content-[''] before:absolute before:w-20 before:h-20 before:bg-[url('/images/footer/bgcir.png')] before:bg-no-repeat before:-left-36 before:bottom-9 lg:before:block before:hidden">
          <div className="md:col-span-5 col-span-12">
            <h6 className="text-foottext pe-5">EmphasisSoft is a modern web development company helping startups and businesses build fast, scalable, and user-friendly digital experiences. From idea to launch, we craft web solutions that drive results.</h6>
          </div>
          <div className="md:col-span-2 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-3">
              Quick Links
            </h4>
            <ul>
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={item.url}
                    className="text-foottext text-16 hover:text-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-3">
              Top Technologies
            </h4>
            <ul>
              {footerLinks.slice(9, 15).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href="#"
                    className="text-foottext text-16 hover:text-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-3">
              Our Services
            </h4>
            <ul>
              {footerLinks.slice(5, 9).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href="#"
                    className="text-foottext text-16 hover:text-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="md:col-span-5 col-span-12">
            <p className="text-18 text-white font-bold">Sign up for updates</p>
            <form className="mt-8">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="bg-search placeholder:text-foottext text-white! py-3 pl-5"
                />
                <Icon
                  icon="solar:plain-2-linear"
                  className="text-22 text-foottext absolute right-5 top-4"
                />
              </div>
            </form>
            <p className="text-18 text-white font-bold py-12">Get App</p>
            <div className="flex">
              <a href="">
                <Image
                  src="/images/footer/play.png"
                  alt="Google Play"
                  width={1000}
                  height={1000}
                  className="w-auto h-auto mr-5"
                />
              </a>
              <a href="">
                <Image
                  src="/images/footer/store.png"
                  alt="App Store"
                  width={1000}
                  height={1000}
                  className="w-auto h-auto"
                />
              </a>
            </div>
          </div> */}
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-between py-10 mt-8">
          <p className="text-16 text-foottext sm:mb-0 mb-4">
            © Copyright 2025. All rights reserved by <Link
              href=""
              target="_blank"
              className="hover:text-primary"
            >
              EmphasisSoft
            </Link>
          </p>
          {/* <div className="flex gap-4">
            {footerLinks.slice(14, 17).map((item, index) => (
              <div key={index} className="">
                <Link href="#" className="text-foottext hover:text-primary">
                  {item.link}
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
