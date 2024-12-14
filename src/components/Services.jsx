import sheepImg from '../assets/images/sheep.jpg';

export default function Services() {
  const container = 'w-auto h-[350px] overflow-hidden rounded-3xl bg-mosswood-300';
  const textContainer = 'flex flex-col justify-between items-left p-14';

  const h3Style = 'text-kelp-900 font-playfair text-lg pb-2';
  const pStyle = 'text-kelp-800 font-quicksand';

  return (
    <section id='services' className='mt-12'>
      <div className='mb-6'>
        <h2 className='text-center font-playfair text-4xl text-kelp-800 uppercase py-5'>
        Tailored Solutions for Every Need
        </h2>
        <h3 className='text-center font-tangerine text-4xl italic text-kelp-800 '>
        Crafting products and experiences that reflect your values and vision, with a commitment to quality and sustainability.
        </h3>
      </div>
      <div className='grid gap-5 lg:grid-cols-3'>
        <div className={`${container} lg:col-span-3`}>
          <img
            src={sheepImg}
            alt='Sheeps and a family'
            className='w-full h-full object-cover'
          />
        </div>
        <div className={`${container} ${textContainer}`}>
            <h3 className={h3Style}>Custom Apparel Design</h3>
            <p className={pStyle}>Bring your brand’s message to life with bespoke designs that tell your story. From t-shirts to hats and mugs, we create high-quality, customizable apparel that reflects your unique identity.</p>
        </div>
        <div className={`${container} ${textContainer}`}>
            <h3 className={h3Style}>Eco-Friendly Packaging Solutions</h3>
            <p className={pStyle}>We offer sustainable packaging alternatives designed to minimize your environmental footprint. Choose from biodegradable, recyclable, and reusable options for your products, without compromising on style or durability.</p>
        </div>        <div className={`${container} ${textContainer}`}>
            <h3 className={h3Style}>Event & Occasion Apparel</h3>
            <p className={pStyle}>Create unforgettable memories with personalized event apparel for weddings, birthdays, corporate events, and more. Our designs are crafted with attention to detail, ensuring your guests feel connected to the occasion.</p>
        </div>
      </div>
    </section>
  );
}
