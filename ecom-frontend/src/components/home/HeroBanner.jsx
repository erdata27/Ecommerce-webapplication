// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper core styles and modules
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';

// Import required Swiper modules
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

// Custom banner content and routing
import { bannerLists } from '../../utils'; // Contains data for each banner (title, subtitle, image, etc.)
import { Link } from 'react-router-dom';

// Define background colors for slides using custom utility classes
const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

const HeroBanner = () => {
    return (
        <div className='py-2 rounded-md'>
            <Swiper
                grabCursor={true} // Enables grabbing cursor on hover
                autoplay={{
                    delay: 4000, // Auto slide every 4 seconds
                    disableOnInteraction: false, // Continue autoplay even after user interaction
                }}
                navigation // Enable navigation arrows
                pagination={{ clickable: true }} // Enable clickable pagination dots
                scrollbar={{ draggable: true }} // Enable draggable scrollbar
                modules={[Pagination, EffectFade, Navigation, Autoplay]} // Add required Swiper modules
                slidesPerView={1} // Show one slide at a time
            >
                {/* Map through banner data to create slides */}
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                            <div className='flex items-center justify-center'>
                                {/* Text section (left on large screens) */}
                                <div className='hidden lg:flex justify-center w-1/2 p-8'>
                                    <div className='text-center'>
                                        <h3 className='text-3xl text-white font-bold'>
                                            {item.title}
                                        </h3>
                                        <h1 className='text-5xl text-white font-bold mt-2'>
                                            {item.subtitle}
                                        </h1>
                                        <p className='text-white font-bold mt-4'>
                                            {item.description}
                                        </p>
                                        <Link 
                                            className='mt-6 inline-block bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800'
                                            to="/products"
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>

                                {/* Image section (right on large screens) */}
                                <div className='w-full flex justify-center lg:w-1/2 p-4'>
                                    <img src={item?.image} alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
