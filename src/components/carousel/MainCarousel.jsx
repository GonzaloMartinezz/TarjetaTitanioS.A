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
    // mt-24 le da el espacio con el navbar, mb-12 lo separa de lo que sigue abajo
    <div className="w-full relative group mt-24 mb-12 bg-white">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        autoHeight={true} 
        className="w-full h-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full">
            {/* w-full asegura que use todo el ancho de la pantalla */}
            <img 
              src={slide.img} 
              alt={`Promoción Tarjeta Titanio ${index + 1}`} 
              className="w-full h-auto object-cover block" 
            />
          </SwiperSlide>
        ))}

        {/* Flechas personalizadas que aparecen al pasar el mouse */}
        <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block bg-black/20 p-2 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block bg-black/20 p-2 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </Swiper>

      <style>{`
        .swiper-slide {
          opacity: 0 !important;
        }
        .swiper-slide-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default MainCarousel;