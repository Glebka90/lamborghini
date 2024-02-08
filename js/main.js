const menuBtn = document.querySelector('.menu-button');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});
(g => {
    var h, a, k, p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set,
        e = new URLSearchParams,
        u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a)
        }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})
({
    key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    v: "weekly"
});


let map;

async function initMap() {
    const {
        Map
    } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: {
            lat: 37.23180408781764,
            lng: -8.630203569280146
        },
        zoom: 14,
        styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "lightness": "30"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "lightness": "40"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    });
}

initMap();