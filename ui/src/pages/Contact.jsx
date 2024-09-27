import React from "react";
import SectionTitle from "../components/SectionTitle";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <main className=''>
      <div className='text-2xl text-center pt-10 border-t'>
        <SectionTitle title={"CONATCT"} subtitle={"US"} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt='contact image'
        />

        <div className='flex flex-col justify-between items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            3487 jedda Station <br /> suite 349, king fahad road, KSA
          </p>
          <p className='text-gray-600'>
            Tel:(050) 174-7626 <br /> Email: mrhossainahmed7@gmail.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>
            Careers at Forever
          </p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300 '>
            Explore jobs
          </button>
          <p></p>
        </div>
      </div>
      <NewsletterBox />
    </main>
  );
};

export default Contact;
