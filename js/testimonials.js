const testimonials = [
    {
        name: "Jithin",
        position: "Brand Manager",
        company: "Oyister Events",
        companyLink: "https://oystersevents.in/",
        rating: 5,
        avatar: "img/avatars/person.webp",
        text: "We’re beyond thrilled with the website Weblysi created for us! It's elegant, easy to use, and perfectly captures the essence of our brand. Their team was supportive, creative, and truly understood our vision from start to finish.",
        projectLink: "https://oystersevents.in/",
        image: "img/testimonials/oystersevents_1400x1941.webp"
    },
    {
        name: "A. K. Reghunathan",
        position: "Rakshaadhikaari Of",
        company: "Taliparamba Sree Bhagavathi Temple",
        companyLink: "https://tbt.weblysi.in/",
        rating: 5,
        avatar: "img/clients/Reghunathan-tbt.webp",
        text: "Weblysi did an outstanding job on our website! It's modern, well-organised, and showcases our gallery beautifully. The team was professional, responsive, and made the whole process smooth and efficient.",
        projectLink: "https://tbt.weblysi.in/",
        image: "img/testimonials/TaliparambaSreeBhagavathiTemple_1400x1786.webp"
    },
    {
        name: "Vismaya Jayaraj",
        position: "Founder Of",
        company: "GiSPACE Clothing Brand",
        companyLink: "",
        rating: 4,
        avatar: "img/avatars/person.webp",
        text: "Weblysi created an amazing website for our clothing brand! The design is sleek and user-friendly, making it easy for our customers to browse and shop. The team was attentive to our needs and delivered a fantastic final product.",
        projectLink: "",
        image: "img/testimonials/gispace.webp"
    },
    {
        name: "Sameer K",
        position: "Founder Of",
        company: "Tutolia Learning Platform",
        companyLink: "",
        rating: 4,
        avatar: "img/avatars/person.webp",
        text: "The team weblysi did an outstanding job on our website!. It's elegant, easy to use, and perfectly captures the essence of our brand",
        projectLink: "",
        image: "img/testimonials/tutolia_1400x1665.webp"
    },
    {
        name: "Sinan T",
        position: "Euntrepreneur &",
        company: "Real Estate",
        companyLink: "",
        rating: 5,
        avatar: "img/avatars/person.webp",
        text: "Our Integrated Property Management Systems is now live and we are extremely happy with the end result. The team at Weblysi were professional, efficient and a pleasure to work with throughout the entire process.",
        projectLink: "",
        image: "img/testimonials/ipms_1545x1900.webp"
    },
    {
        name: "Althaf PV",
        position: "Owner Of",
        company: "Cargo Automotives",
        companyLink: "",
        rating: 4,
        avatar: "img/avatars/person.webp",
        text: "We are extremely satisfied with the website Weblysi developed for our automotive business. The design is sleek and user-friendly, making it easy for our customers to navigate and find the information they need.",
        projectLink: "",
        image: "img/testimonials/cargo_1550x1900.webp"
    },
    {
        name: "Isam Abdullah",
        position: "Owner Of",
        company: "Kenze Restaurant",
        companyLink: "",
        rating: 5,
        avatar: "img/avatars/person.webp",
        text: "Being a restaurant owner, having an appealing and functional website is crucial for attracting customers. Weblysi did an exceptional job in creating a website that not only looks great but also provides a seamless user experience.",
        projectLink: "",
        image: "img/testimonials/qrfood_1560x1900.webp"
    },
    // {
    //     name: "",
    //     position: "Manager Of",
    //     company: "",
    //     companyLink: "",
    //     rating: 5,
    //     avatar: "img/avatars/person.webp",
    //     text: "",
    //     projectLink: "",
    //     image: "img/testimonials/"
    // },
];


function createStars(rating) {
    return Array.from({ length: rating }, () =>
        '<i class="ph-fill ph-star"></i>'
    ).join("");
}

function renderTestimonials() {
    const wrapper = document.getElementById("testimonials-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = testimonials
        .map((t) => {
            return `
        <div class="swiper-slide">
            <div class="testimonials-card animate-in-up mx-1">
                <div class="container-fluid p-0 fullheight-l">
                    <div class="row g-0 d-flex align-items-stretch fullheight-l">
                        <div class="col-12 col-lg-6 testimonials-card__tdata">
                            <div class="testimonials-card__tauthor d-flex">
                                <div class="tauthor__avatar animate-in-up">
                                    <img src="${t.avatar}" alt="Review Author">
                                </div>
                                <div class="tauthor__info d-flex flex-column justify-content-center">
                                    <h4 class="tauthor__name animate-in-up">${t.name}</h4>
                                    <p class="tauthor__position small animate-in-up">
                                        ${t.position}
                                        ${t.companyLink ?
                                            `<a class="link-small-underline" href="${t.companyLink}">${t.company}</a>`
                                            : `${t.company}`
                                        }
                                    </p>
                                    <div class="tauthor__rating d-flex animate-in-up">
                                        ${createStars(t.rating)}
                                    </div>
                                </div>
                            </div>

                            <div class="testimonials-card__descr animate-in-up">
                                <p class="type-basic-160lh">${t.text}</p>
                            </div>
                            ${t.projectLink ? `
                            <div class="testimonials-card__btnholder animate-in-up">
                                <a class="btn btn-line icon-right slide-right" href="${t.projectLink}">
                                <span class="btn-caption">Project page</span>
                                <i class="ph ph-arrow-right"></i>
                                </a>
                            </div>
                            ` : "" }
                        </div>  
                        <div class="col-12 col-lg-6 testimonials-card__timage fullheight-l">
                            <div class="timage__inner fullheight-l animate-in-up">
                                <img src="${t.image}" alt="Testimonials Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        })
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    // 1) Insert all slides first
    renderTestimonials();

    // 2) Get the testimonials swiper container
    const swiperEl = document.querySelector(".swiper-testimonials");
    if (!swiperEl) return;

    // 3) If the theme already initialized a Swiper instance, kill it
    if (swiperEl.swiper) {
        swiperEl.swiper.destroy(true, true);
    }

    // 4) Scope pagination & navigation to THIS slider only
    const paginationEl = swiperEl.querySelector(".swiper-pagination");
    const nextEl = swiperEl.querySelector(".swiper-button-next");
    const prevEl = swiperEl.querySelector(".swiper-button-prev");

    // 5) Initialize our own Swiper *after* slides exist
    window.testimonialsSwiper = new Swiper(swiperEl, {
        loop: testimonials.length > 2, // loop only if 3+ slides
        speed: 600,
        navigation: {
            nextEl,
            prevEl
        },
        pagination: {
            el: paginationEl,
            type: "fraction"
        },
        keyboard: {
            enabled: true
        }
    });
});



