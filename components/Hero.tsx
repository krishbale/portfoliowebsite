import React from 'react'
import { BsFillMoonStarsFill, BsMedium } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import ecom4 from "../public/ecom4.png";
import ecom5 from "../public/ecom5.png";
import profile from "../public/profile.png";
interface ICardProps {
    darkmode:any;
    setDarkmode:any;
}
import Link from "next/link"
const Hero = ({darkmode,setDarkmode}:ICardProps) => {
    
  return (
    <div>
         <section className="min-h-screen">
            <nav className=" py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="text-xl font-burtons">Balkrishna Pokharel</h1>
              <ul className="flex items-center">
                <li className=" cursor-pointer text-2xl">
                  <BsFillMoonStarsFill onClick={() => setDarkmode(!darkmode)} />
                </li>
                   <li>
                  <a
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="lg:flex flex-col  ">
              <div className=" text-center p-10 dark:text-white ">
                <p className=" text-1xl py-2 text-teal-400  font-medium md:text-3xl">
                  Hello , I am{" "}
                </p>
                <h2 className=" text-5xl py-2 text-teal-500  font-medium md:text-6xl">
                  Balkrishna Pokharel, 
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl text-teal-500" >Full Stack Developer</h3>
                <p className="text-md py-3 leading-8 md:text-lg max-w- mx-auto dark:text-white">
                  I have experience on designing and building web-application and deploying them.<br/>
                </p>
              </div>
              <div className="text-5xl flex justify-center gap-10 text-gray-600 dark:text-white">
                <Link href="https://github.com/krishbale">
                  {" "}
                  <AiFillGithub />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/balkrishna-pokharel-600a4814a/"
                  }
                >
                  {" "}
                  <AiFillLinkedin />
                </Link>
                <Link href="https://medium.com/@sushil.pokharel.7528">
                  <BsMedium />
                </Link>
              </div>
              <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 ">
                <Image src={profile} alt="" />
              </div>
            </div>
          </section>
    </div>
  )
}

export default Hero