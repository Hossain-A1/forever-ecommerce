import React from "react";

const NewsletterBox = () => {
  const haldleNewsletter = (e) => {
    e.preventDefault();
  };
  return (
    <div className='text-center'>
      <p className='text-2xl'>Subscribe now & get 20% off!</p>

      <p className='text-gray-400 mt-3'>
        Subscribe now to Forever Clothes and enjoy 20% off your first purchase!
      </p>
      <form
        onSubmit={haldleNewsletter}
        className='w-full sm:w-1/2 flex items-center gap-3 my-6 border pl-3 m-auto'
      >
        <input
          required
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Inter your email'
        />
        <button
          className=' bg-black text-white text-xs px-10 py-4'
          type='submit'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
