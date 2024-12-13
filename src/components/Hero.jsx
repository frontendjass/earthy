import heroImage from '../assets/images/heroImage 2.jpg';

export default function Hero() {
  return (
    <section className='pb-20'>
      <div className='mt-10 py-5 grid grid-cols-1 grid-rows-auto gap-2 lg:grid-cols-6 items-center xl:grid-cols-7'>
        <h1 className='font-playfair text-7xl uppercase text-center text-kelp-800 md:text-9xl lg:text-left lg:col-span-5'>
          Love Nature
        </h1>
        <h2 className='font-tangerine text-5xl text-center text-kelp-800 lg:col-span-4 lg:row-start-2 lg:col-end-7 lg:text-right xl:text-6xl xl:col-end-8'>
          One touch of nature makes the whole world kin
        </h2>
        <p className='font-quicksand text-center text-kelp-700 lg:justify-self-end lg:text-left lg:col-span-1 xl:text-lg xl:col-span-2'>
          Those who contemplate the beauty of the earth find reserves of
          strength that will endure as long as life lasts
        </p>
      </div>
      <div className='w-auto h-[400px] overflow-hidden rounded-3xl mt-4 lg:h-[450px]'>
        <img
          src={heroImage}
          alt='Mountain landscape.'
          className='w-full h-full object-cover'
        />
        <div className='w-40 h-40 bg-mosswood-200 absolute rounded-full left-1/2 -translate-x-1/2 -translate-y-20 flex justify-center items-center'>
          <div className='w-32 h-32 bg-kelp-800 rounded-full flex justify-center items-center'>
            <button className='text-mosswood-200 font-source-sans-3 text-md uppercase text-center p-5'>
              Find more now
            </button>
          </div>
        </div>
      </div>
    </section>
    // <section>
    //   <div className='grid grid-cols-5 mt-10 items-center'>
    //     <h1 className='font-playfair text-8xl uppercase text-left text-kelp-800 col-span-4'>
    //       Live in Nature
    //     </h1>
    //     <h2 className='font-tangerine text-5xl text-left italic space text-kelp-800 col-span-3 row-start-2 col-start-3'>
    //       One touch of nature makes the whole world kin touch of nature nature
    //     </h2>
    //     <p className='font-quicksand text-kelp-700 w-72 text-left justify-self-end'>
    //       Those who contemplate the beauty of the earth find reserves of
    //       strength that will endure as long as life lasts
    //     </p>
    //   </div>
    //   <div className='w-auto h-[550px] overflow-hidden rounded-3xl mt-4'>
    //     <img
    //       src={heroImage}
    //       alt='Mountain landscape.'
    //       className='w-full h-full object-cover'
    //     />
    //     <div className='w-36 h-36 bg-mosswood-200 absolute rounded-full left-1/2 -translate-x-1/2 -translate-y-20 flex justify-center items-center'>
    //       <div className='w-28 h-28 bg-kelp-800 rounded-full flex justify-center items-center'>
    //         <h2 className='text-mosswood-200 font-source-sans-3 text-md uppercase text-center p-2'>
    //           Find more now
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
