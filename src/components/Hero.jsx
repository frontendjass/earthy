import heroImage from '../assets/images/heroImage 2.jpg';

export default function Hero() {
  return (
    <section className=''>
      <div className='mt-10 flex flex-col gap-2'>
        <h1 className='font-playfair text-6xl uppercase text-center text-kelp-800'>
          Live in Nature
        </h1>
        <p className='font-tangerine text-4xl text-center text-kelp-800'>
          One touch of nature makes the whole world kin
        </p>
        <p className='font-quicksand text-center text-kelp-700'>
          Those who contemplate the beauty of the earth find reserves of
          strength that will endure as long as life lasts
        </p>
      </div>
      <div className='w-auto h-[400px] overflow-hidden rounded-3xl mt-4'>
        <img
          src={heroImage}
          alt='Mountain landscape.'
          className='w-full h-full object-cover'
        />
        <div className='w-36 h-36 bg-mosswood-200 absolute rounded-full left-1/2 -translate-x-1/2 -translate-y-20 flex justify-center items-center'>
          <div className='w-28 h-28 bg-kelp-800 rounded-full flex justify-center items-center'>
            <h2 className='text-mosswood-200 font-source-sans-3 text-md uppercase text-center p-2'>Find more now</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
