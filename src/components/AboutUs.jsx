import couplePhoto from '../assets/images/couple.jpeg';
import flowersPhoto from '../assets/images/flowers.jpeg';
import cowPhoto from '../assets/images/cow.jpeg';

export default function AboutUs() {
  const container = 'w-auto h-[350px] overflow-hidden rounded-3xl bg-kelp-800';
  const textContainer = 'flex flex-col justify-center items-center p-14';
  const h3Style = 'text-mosswood-200 font-playfair text-lg pb-2';
  const pStyle = 'text-mosswood-300 font-quicksand';

  return (
    <section>
      <div className='flex flex-col gap-3 pb-5'>
        <h2 className='text-center font-playfair text-4xl text-kelp-800 uppercase py-5'>
          Rooted in Tradition Since 1897
        </h2>
        <h3 className='text-center font-tangerine text-4xl italic'>
          Honoring Our Past, Shaping the Future
        </h3>
      </div>
      <div className='grid gap-5 lg:grid-cols-3'>
        <div className={`${container} lg:col-span-2`}>
          <img
            src={couplePhoto}
            alt='A couple'
            className='w-full h-full object-cover'
          />
        </div>
        <div className={`${container} ${textContainer}`}>
          <h3 className={h3Style}>Our story</h3>
          <p className={pStyle}>
            Since 1897, we’ve been committed to crafting exceptional products
            rooted in tradition and built on passion. What started as a small
            endeavor has grown into a legacy of quality and trust that continues
            to inspire everything we do today.
          </p>
        </div>
        <div className={`${container} ${textContainer}`}>
          <h3 className={h3Style}>Our legacy</h3>
          <p className={pStyle}>
            For over a century, our dedication to excellence has stood the test
            of time. Generations have trusted us for our unwavering commitment
            to craftsmanship, innovation, and values that never go out of style.
            Our legacy is built on stories shared, memories made, and traditions
            preserved.
          </p>
        </div>
        <div className={container}>
          <img src={flowersPhoto} alt='Some white roses' />
        </div>
        <div className={container}>
          <img src={cowPhoto} alt='A cow' />
        </div>
      </div>
    </section>
  );
}
