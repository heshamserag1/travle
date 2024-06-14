const { createApp } = Vue;

const app = createApp({
  data() {
    return {
        img: [
        {
          imgcrousle1: "assets/img/hero/hero-bg.png",
          imgcrousle2: "assets/img/hero/hero-img.png",
          imgcrousle3: "assets/img/icons/locashen.png"

     
        },
            {
            imgMostPopular1:"assets/img/dest/dest1.jpg",
            imgMostPopular2:"assets/img/dest/dest2.jpg",
            imgMostPopular3:"assets/img/dest/dest3.jpg",
            imgMostPopular4:"assets/img/dest/shape.svg",

            navigation1:"assets/img/dest/navigation.svg",
            navigation2:"assets/img/dest/navigation.svg",
            navigation3:"assets/img/dest/navigation.svg"
        },
       
        {
            supportlocation:"asset/img/service/hai.png",
            supporticon1:"assets/img/commercial-plane.png",
            supporticon2:"assets/img/hotel.png",
            supporticon3:"assets/img/travel.png",

        },
        {
          Explore1:"asset/img/service/services1.jpg",
          Explore2:"asset/img/service/services2.jpg",
          Explore3:"asset/img/service/services3.jpg",
          Explore4:"asset/img/service/services4.jpg",
          Explore5:"asset/img/service/services5.jpg",
          Explore6:"asset/img/service/services6.jpg",
        },
        {
          Testimonials1:"assets/img/testimonial/author.png",
          Testimonials2:"assets/img/testimonial/author2.png",
          Testimonials3:"assets/img/testimonial/author3.png",
          Testimonialsicons1:"assets/img/icons/up.svg",
          Testimonialsicons2:"assets/img/icons/down.svg",
        },
        {
          EasyandFast1:"assets/img/steps/selection.svg",
          EasyandFast2:"assets/img/steps/water-sport.svg",
          EasyandFast3:"assets/img/steps/taxi.svg",
          EasyandFast4:"assets/img/steps/bg.png",
          EasyandFast5:"assets/img/steps/booking-img.jpg",
          EasyandFast6:"assets/img/steps/leaf.svg",
          EasyandFast7:"assets/img/steps/building.svg",
          EasyandFast8:"assets/img/steps/favorite-placeholder.png",
          EasyandFast9:"assets/img/steps/heart.svg",
          EasyandFast10:"assets/img/steps/map.svg",
          EasyandFast11:"assets/img/steps/send.svg",

        },
      {
        footerimg1:"assets/img/logo2.svg",
        footerimg2:"assets/img/play-store.png",
        footerimg3:"assets/img/apple-store.png"
      }
      ]
    };
  }
});

app.mount("#top");
