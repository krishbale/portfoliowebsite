import Head from 'next/head'
import { BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import profile from '../public/profile.png'
import {useState } from 'react';


export default function Home() {
  const [darkmode,setDarkmode]= useState(false);
  return (
    <>
    <div className={darkmode ? 'dark':""}>
      <Head>
        <title>Balkrishna Pokharel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
         
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>Balkrishna Pokharel</h1>
            <ul className='flex items-center'>
              <li className=' cursor-pointer text-2xl'><BsFillMoonStarsFill onClick={()=> setDarkmode(!darkmode)} /></li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'   href="#">Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10 dark:text-white '>
            <h2 className=' text-5xl py-2 text-teal-600  font-medium md:text-6xl'>Balkrishna Pokharel</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>FULL STACK Developers</h3>
            <p className='text-md py-3 leading-8 text-gray-800 md:text-lg max-w- mx-auto dark:text-white'>CS & IT Students</p>

          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-white'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 ' >
            <Image src={profile}  alt=''   />
          </div>
        </section>
        <section>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1 leading-8 text-gray-800 dark:text-white'>About me</h3>
            <p>Balkrishna Pokharel versatile web developers and programmers due to his extensive history in <span className='text-teal-500'>programming</span> and web design. His dedication to continuously learning about new web design trends makes him the beneficial  and valuable for any company.   </p>
            <p>With 4 years of<span className='text-teal-500'> experience </span> and a studing bachlor 's in Computer Science & IT , his learning can help customers modernize with websites and appeal to expanding customer expectations.</p>
          </div>
          <div className='lg:flex gap-10 dark:text-white'>
            <div className='text-center shadow-lg p-10 rounded-xl  my-10  '>
              <Image className='mx-auto'  src={design} width="100" height={100} alt=""/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Designing</h3>
              <p className='py-2'>Creating elegant design for your needs and requirements specially using for web development</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-white '>Photoshop</p>
              <p className='text-gray-800 py-1  dark:text-white '>Illustrator</p>
              <p className='text-gray-800 py-1  dark:text-white '>Figma</p>


            </div >
            <div className='text-center shadow-lg p-10 rounded-xl  my-10 '>
              <Image className='mx-auto'   src={code} width="100" height={100} alt=""/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Coding</h3>
              <p className='py-2'> Clean  Coding   with responsive design and industry standard  </p>
              <h4 className='py-4 text-teal-600'>Main Coding Technology/Platform  </h4>
              <p className='text-gray-800 py-1  dark:text-white '>React Redux </p>
              <p className='text-gray-800 py-1  dark:text-white '>Express Node  </p>
              <p className='text-gray-800 py-1  dark:text-white '>MongoDB  Firebase</p>


            </div>
            <div className='text-center shadow-lg p-10 rounded-xl  my-10'>
              <Image className='mx-auto'  src={consulting} width="100" height={100} alt=""/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Testing </h3>
              <p className='py-2'>Strong Debugging skills , and problems solving ideas and skills  </p>
              <h4 className='py-4 text-teal-600'>Testing and deployments</h4>
              <p className='text-gray-800 py-1  dark:text-white '>Bug Testing</p>
              <p className='text-gray-800 py-1 dark:text-white'  >Deployments </p>
              <p className='text-gray-800 py-1  dark:text-white '>Maintainance</p>


            </div>
          </div>
        </section>
        <section>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1'>Porfolio</h3>
            <p> Projects  completed in <span className='text-teal-500'>Web Development</span> and <span className='text-teal-500'> Designing. </span></p>
            <p></p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web1} alt="" /></div>
          
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web2} alt="" /></div>
          
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web3} alt="" /></div>
          
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web4} alt="" /></div>
          
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web5} alt="" /></div>
          
            <div className=' basis-1/3 flex-1 '><Image className=' rounded-lg object-cover w-100% h-100%' layout='responsive'  src={web6} alt="" /></div>
            </div>
        </section>

      </main>
      </div>
    </>
  )
}
