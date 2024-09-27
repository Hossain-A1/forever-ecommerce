import React from "react";
import SectionTitle from "../components/SectionTitle";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <main>
      <div className='text-2xl text-center mt-8 border-t'>
        <SectionTitle title={"ABOUT"} subtitle={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt='about image'
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            quo, dolore provident accusamus excepturi maxime error facere quam
            enim delectus architecto, maiores, iure soluta ut quae explicabo
            possimus! Ducimus, dolores?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            quo, dolore provident accusamus excepturi maxime error facere quam
            enim delectus architecto, maiores, iure soluta ut quae explicabo
            possimus! Ducimus, dolores?
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            voluptate corrupti delectus ipsam esse assumenda ex non, accusamus
            odit modi.
          </p>
        </div>

        </div>
        
        <div className='text-4xl py-4'>
          <SectionTitle title={"WHY"} subtitle={"CHOOSE US"} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              officia tempora cumque debitis, doloremque nisi.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              officia tempora cumque debitis, doloremque nisi.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              officia tempora cumque debitis, doloremque nisi.
            </p>
          </div>

       
      </div>
          <NewsletterBox/>
    </main>
  );
};

export default About;
