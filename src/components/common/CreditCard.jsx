import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Importación de estilos obligatorios
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const MainCarousel = () => {
  const slides = [
    { img: "/1.1.png" },
    { img: "/1.2.png" },
    { img: "/2.1.jpg" },
    { img: "/2.2.png" },
    { img: "/2.3.png" },
    { img: "/2.4.png" },
    { img: "/2.5.png" },
    { img: "/2.6.png" },
    { img: "/2.7.png" }
  ];

  return (
    /* mt-24: mantiene el espacio con el navbar.
       mb-16: un poco más de aire con lo de abajo.
    */
    <div className="w-full relative group mt-24 mb-16 bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        /* Eliminamos autoHeight para controlar nosotros el alto */
        className="w-full h-[55vh] sm:h-[70vh] lg:h-[85vh]" 
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[100ms] scale-100 group-hover:scale-105"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* bg-cover asegura que la imagen cubra todo el ancho y el nuevo alto extra */}
            </div>
          </SwiperSlide>
        ))}

        {/* Flechas personalizadas */}
        <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex bg-[#00529B]/40 hover:bg-[#00529B] p-3 rounded-full backdrop-blur-md items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex bg-[#00529B]/40 hover:bg-[#00529B] p-3 rounded-full backdrop-blur-md items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </Swiper>

      <style>{`
        .swiper-slide {
          opacity: 0 !important;
          transition-property: opacity;
        }
        .swiper-slide-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default MainCarousel;