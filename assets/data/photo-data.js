// Group photos by broader regions so new entries are easy to slot in.
window.photoRegions = [
  {
    name: "Asia",
    cities: [
      { id: "Agra, India", lat: 27.1767, lng: 78.0081 },
      { id: "Samarkand, Uzbekistan", lat: 39.6542, lng: 66.9597 },
      { id: "Beijing, China", lat: 39.9042, lng: 116.4074 },
      { id: "Petra, Jordan", lat: 30.3285, lng: 35.4444 },
      { id: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
      { id: "Kyoto, Japan", lat: 35.0116, lng: 135.7681 }
    ],
    photos: [
      { src: "assets/photos/2016 Dec Agra.JPG", alt: "2016 Dec Agra.JPG", city: "Agra, India", date: "December 2016" },
      { src: "assets/photos/2017 Feb Uzbekistan.JPG", alt: "2017 Feb Uzbekistan.JPG", city: "Samarkand, Uzbekistan", date: "February 2017" },
      { src: "assets/photos/2018 April China.JPG", alt: "2018 April China.JPG", city: "Beijing, China", date: "April 2018" },
      { src: "assets/photos/2018 Oct Jordan.JPG", alt: "2018 Oct Jordan.JPG", city: "Petra, Jordan", date: "October 2018" },
      { src: "assets/photos/2019 Oct Japan 1.jpg", alt: "2019 Oct Japan 1.jpg", city: "Tokyo, Japan", date: "October 2019" },
      { src: "assets/photos/2019 Oct Japan.jpg", alt: "2019 Oct Japan.jpg", city: "Kyoto, Japan", date: "October 2019" }
    ]
  },
  {
    name: "Europe",
    cities: [
      { id: "Lozovac, Croatia", lat: 43.8013, lng: 15.9722 },
      { id: "Lake Como, Italy", lat: 46.0160, lng: 9.2572 },
      { id: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426 },
      { id: "Jungfraujoch, Switzerland", lat: 46.5475, lng: 7.9806 },
      { id: "London, UK", lat: 51.5074, lng: -0.1278 }
    ],
    photos: [
      { src: "assets/photos/2017 Jul Croatia.jpg", alt: "2017 Jul Croatia.jpg", city: "Lozovac, Croatia", date: "July 2017" },
      { src: "assets/photos/2021 June Como.jpg", alt: "2021 June Como.jpg", city: "Lake Como, Italy", date: "June 2021" },
      { src: "assets/photos/2019 Aug Iceland.jpg", alt: "2019 Aug Iceland.jpg", city: "Reykjavik, Iceland", date: "August 2019" },
      { src: "assets/photos/2022 Jan Switzerland.JPG", alt: "2022 Jan Switzerland.JPG", city: "Jungfraujoch, Switzerland", date: "January 2022" },
      { src: "assets/photos/2023 Nov London.jpg", alt: "2023 Nov London.jpg", city: "London, UK", date: "November 2023" }
    ]
  },
  {
    name: "Africa",
    cities: [
      { id: "Maasai Mara, Kenya", lat: -1.4061, lng: 35.0400 },
      { id: "Marrakech, Morocco", lat: 31.6295, lng: -7.9811 }
    ],
    photos: [
      { src: "assets/photos/2022 Aug Kenya.JPG", alt: "2022 Aug Kenya.JPG", city: "Maasai Mara, Kenya", date: "August 2022" },
      { src: "assets/photos/2022 Dec Morocco.jpg", alt: "2022 Dec Morocco.jpg", city: "Marrakech, Morocco", date: "December 2022" }
    ]
  },
  {
    name: "North America",
    cities: [
      { id: "Yellowstone National Park, USA", lat: 44.4280, lng: -110.5885 },
      { id: "Philadelphia, USA", lat: 39.9526, lng: -75.1652 },
      { id: "Outer Banks, USA", lat: 36.0896, lng: -75.6674 },
      { id: "Poconos, USA", lat: 41.1710, lng: -75.2900 },
      { id: "New York City, USA", lat: 40.7128, lng: -74.0060 },
      { id: "Cleveland, USA", lat: 41.4993, lng: -81.6944 }
    ],
    photos: [
      { src: "assets/photos/2023 Aug Yellowstone.jpg", alt: "2023 Aug Yellowstone.jpg", city: "Yellowstone National Park, USA", date: "August 2023" },
      { src: "assets/photos/2023 Jul Philadelphia.JPG", alt: "2023 Jul Philadelphia.JPG", city: "Philadelphia, USA", date: "July 2023" },
      { src: "assets/photos/2023 Mar Outer Banks.JPG", alt: "2023 Mar Outer Banks.JPG", city: "Outer Banks, USA", date: "March 2023" },
      { src: "assets/photos/2023 Oct Poconos.jpg", alt: "2023 Oct Poconos.jpg", city: "Poconos, USA", date: "October 2023" },
      { src: "assets/photos/2024 July New York City.jpg", alt: "2024 July New York City.jpg", city: "New York City, USA", date: "July 2024" },
      { src: "assets/photos/2024 June Cleveland.JPG", alt: "2024 June Cleveland.JPG", city: "Cleveland, USA", date: "June 2024" }
    ]
  },
  {
    name: "South America",
    cities: [
      { id: "Galápagos Islands, Ecuador", lat: -0.9538, lng: -90.9656 }
    ],
    photos: [
      { src: "assets/photos/2023 Dec Galapagos 1.JPG", alt: "2023 Dec Galapagos 1.JPG", city: "Galápagos Islands, Ecuador", date: "December 2023" },
      { src: "assets/photos/2023 Dec Galapagos 2.JPG", alt: "2023 Dec Galapagos 2.JPG", city: "Galápagos Islands, Ecuador", date: "December 2023" },
      { src: "assets/photos/2023 Dec Galapagos 3.jpg", alt: "2023 Dec Galapagos 3.jpg", city: "Galápagos Islands, Ecuador", date: "December 2023" },
      { src: "assets/photos/2023 Dec Galapagos 4.JPG", alt: "2023 Dec Galapagos 4.JPG", city: "Galápagos Islands, Ecuador", date: "December 2023" },
      { src: "assets/photos/2023 Dec Galapagos.JPG", alt: "2023 Dec Galapagos.JPG", city: "Galápagos Islands, Ecuador", date: "December 2023" }
    ]
  },
  {
    name: "Oceania",
    cities: [
      { id: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
      { id: "Cairns, Australia", lat: -16.9186, lng: 145.7781 },
      { id: "Queenstown, New Zealand", lat: -45.0312, lng: 168.6626 }
    ],
    photos: [
      { src: "assets/photos/2024 Dec Australia 1.JPG", alt: "2024 Dec Australia 1.JPG", city: "Sydney, Australia", date: "December 2024" },
      { src: "assets/photos/2024 Dec Australia 2.JPG", alt: "2024 Dec Australia 2.JPG", city: "Sydney, Australia", date: "December 2024" },
      { src: "assets/photos/2024 Dec Australia 3.jpg", alt: "2024 Dec Australia 3.jpg", city: "Cairns, Australia", date: "December 2024" },
      { src: "assets/photos/2024 Dec Australia.JPG", alt: "2024 Dec Australia.JPG", city: "Cairns, Australia", date: "December 2024" },
      { src: "assets/photos/2025 Jan New Zealand.jpg", alt: "2025 Jan New Zealand.jpg", city: "Queenstown, New Zealand", date: "January 2025" }
    ]
  }
];

// Flatten into the structures the rest of the site expects while tagging each photo with its region.
window.photoCityLookup = window.photoRegions.reduce((acc, region) => {
  region.cities.forEach(city => {
    acc[city.id] = { name: city.id, lat: city.lat, lng: city.lng, region: region.name };
  });
  return acc;
}, {});

window.photoEntries = window.photoRegions.flatMap(region =>
  region.photos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    location: photo.city,
    date: photo.date,
    region: region.name
  }))
);
