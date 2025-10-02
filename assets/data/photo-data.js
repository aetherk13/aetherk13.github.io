// Group photos by broader regions so new entries are easy to slot in.
window.photoRegions = [
  {
    name: "Asia",
    cities: [
      { id: "Agra, India", lat: 27.1767, lng: 78.0081 },
      { id: "Aqaba, Jordan", lat: 29.5328, lng: 35.0064 },
      { id: "Bangkok, Thailand", lat: 13.7563, lng: 100.5018 },
      { id: "Beijing, China", lat: 39.9042, lng: 116.4074 },
      { id: "East Jerusalem, Israel", lat: 31.7833, lng: 35.2333 },
      { id: "Goreme, Turkey", lat: 38.6431, lng: 34.8310 },
      { id: "Hiroshima, Japan", lat: 34.3853, lng: 132.4553 },
      { id: "Kyoto, Japan", lat: 35.0116, lng: 135.7681 },
      { id: "Pamukkale, Turkey", lat: 37.9137, lng: 29.1173 },
      { id: "Petra, Jordan", lat: 30.3285, lng: 35.4444 },
      { id: "Phuket, Thailand", lat: 7.8804, lng: 98.3923 },
      { id: "Samarkand, Uzbekistan", lat: 39.6542, lng: 66.9597 },
      { id: "Shaanxi, China", lat: 34.3416, lng: 108.9398 },
      { id: "Tashkent, Uzbekistan", lat: 41.2995, lng: 69.2401 },
      { id: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 }
    ],
    photos: [
      { src: "assets/photos/2016 Agra India.jpg", alt: "2016 Agra India.jpg", city: "Agra, India", date: "2016" },
      { src: "assets/photos/2017 Samarkand Uzbekistan.jpg", alt: "2017 Samarkand Uzbekistan.jpg", city: "Samarkand, Uzbekistan", date: "2017" },
      { src: "assets/photos/2018 Beijing China.jpg", alt: "2018 Beijing China.jpg", city: "Beijing, China", date: "2018" },
      { src: "assets/photos/2018 Petra Jordan.jpg", alt: "2018 Petra Jordan.jpg", city: "Petra, Jordan", date: "2018" },
      { src: "assets/photos/2019 Tokyo Japan.jpg", alt: "2019 Tokyo Japan.jpg", city: "Tokyo, Japan", date: "2019" },
      { src: "assets/photos/2019 Kyoto Japan.jpg", alt: "2019 Kyoto Japan.jpg", city: "Kyoto, Japan", date: "2019" },
      { src: "assets/photos/2018 Aqaba Jordan.jpg", alt: "2018 Aqaba Jordan.jpg", city: "Aqaba, Jordan", date: "2018" },
      { src: "assets/photos/2018 Aqaba Jordan 02.jpg", alt: "2018 Aqaba Jordan 02.jpg", city: "Aqaba, Jordan", date: "2018" },
      { src: "assets/photos/2017 Bangkok Thailand.jpg", alt: "2017 Bangkok Thailand.jpg", city: "Bangkok, Thailand", date: "2017" },
      { src: "assets/photos/2018 Beijing China 02.jpg", alt: "2018 Beijing China 02.jpg", city: "Beijing, China", date: "2018" },
      { src: "assets/photos/2018 Beijing China 03.jpg", alt: "2018 Beijing China 03.jpg", city: "Beijing, China", date: "2018" },
      { src: "assets/photos/2018 Beijing China 04.jpg", alt: "2018 Beijing China 04.jpg", city: "Beijing, China", date: "2018" },
      { src: "assets/photos/2018 Beijing China 05.jpg", alt: "2018 Beijing China 05.jpg", city: "Beijing, China", date: "2018" },
      { src: "assets/photos/2018 East Jerusalem Israel.jpg", alt: "2018 East Jerusalem Israel.jpg", city: "East Jerusalem, Israel", date: "2018" },
      { src: "assets/photos/2019 Goreme Turkey.jpg", alt: "2019 Goreme Turkey.jpg", city: "Goreme, Turkey", date: "2019" },
      { src: "assets/photos/2019 Goreme Turkey 02.jpg", alt: "2019 Goreme Turkey 02.jpg", city: "Goreme, Turkey", date: "2019" },
      { src: "assets/photos/2019 Hiroshima Japan.jpg", alt: "2019 Hiroshima Japan.jpg", city: "Hiroshima, Japan", date: "2019" },
      { src: "assets/photos/2019 Hiroshima Japan 02.jpg", alt: "2019 Hiroshima Japan 02.jpg", city: "Hiroshima, Japan", date: "2019" },
      { src: "assets/photos/2019 Hiroshima Japan 03.jpg", alt: "2019 Hiroshima Japan 03.jpg", city: "Hiroshima, Japan", date: "2019" },
      { src: "assets/photos/2019 Hiroshima Japan 04.jpg", alt: "2019 Hiroshima Japan 04.jpg", city: "Hiroshima, Japan", date: "2019" },
      { src: "assets/photos/2019 Kyoto Japan 02.jpg", alt: "2019 Kyoto Japan 02.jpg", city: "Kyoto, Japan", date: "2019" },
      { src: "assets/photos/2019 Pamukkale Turkey.jpg", alt: "2019 Pamukkale Turkey.jpg", city: "Pamukkale, Turkey", date: "2019" },
      { src: "assets/photos/2019 Pamukkale Turkey 02.jpg", alt: "2019 Pamukkale Turkey 02.jpg", city: "Pamukkale, Turkey", date: "2019" },
      { src: "assets/photos/2018 Petra Jordan 02.jpg", alt: "2018 Petra Jordan 02.jpg", city: "Petra, Jordan", date: "2018" },
      { src: "assets/photos/2017 Phuket Thailand.jpg", alt: "2017 Phuket Thailand.jpg", city: "Phuket, Thailand", date: "2017" },
      { src: "assets/photos/2017 Samarkand Uzbekistan 02.jpg", alt: "2017 Samarkand Uzbekistan 02.jpg", city: "Samarkand, Uzbekistan", date: "2017" },
      { src: "assets/photos/2018 Shaanxi China.jpg", alt: "2018 Shaanxi China.jpg", city: "Shaanxi, China", date: "2018" },
      { src: "assets/photos/2017 Tashkent Uzbekistan.jpg", alt: "2017 Tashkent Uzbekistan.jpg", city: "Tashkent, Uzbekistan", date: "2017" },
      { src: "assets/photos/2019 Tokyo Japan 02.jpg", alt: "2019 Tokyo Japan 02.jpg", city: "Tokyo, Japan", date: "2019" },
      { src: "assets/photos/2019 Tokyo Japan 03.jpg", alt: "2019 Tokyo Japan 03.jpg", city: "Tokyo, Japan", date: "2019" },
      { src: "assets/photos/2019 Tokyo Japan 04.jpg", alt: "2019 Tokyo Japan 04.jpg", city: "Tokyo, Japan", date: "2019" },
      { src: "assets/photos/2019 Tokyo Japan 05.jpg", alt: "2019 Tokyo Japan 05.jpg", city: "Tokyo, Japan", date: "2019" }
    ]
  },
  {
    name: "Europe",
    cities: [
      { id: "Basel, Switzerland", lat: 47.5596, lng: 7.5886 },
      { id: "Dervio, Italy", lat: 46.0759, lng: 9.2901 },
      { id: "Dubrovnik, Croatia", lat: 42.6507, lng: 18.0944 },
      { id: "Jungfraujoch, Switzerland", lat: 46.5475, lng: 7.9806 },
      { id: "Lake Como, Italy", lat: 46.0160, lng: 9.2572 },
      { id: "London, UK", lat: 51.5074, lng: -0.1278 },
      { id: "Lozovac, Croatia", lat: 43.8013, lng: 15.9722 },
      { id: "Mostar, Bosnia and Herzegovina", lat: 43.3438, lng: 17.8078 },
      { id: "Oslo, Norway", lat: 59.9139, lng: 10.7522 },
      { id: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426 },
      { id: "Rovaniemi, Finland", lat: 66.5039, lng: 25.7294 },
      { id: "Stranda, Norway", lat: 62.3065, lng: 6.9355 },
      { id: "Vestland, Norway", lat: 60.3913, lng: 5.3221 },
      { id: "Wolschwiller, France", lat: 47.4543, lng: 7.3430 },
      { id: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041 },
      { id: "Berlin, Germany", lat: 52.5200, lng: 13.4050 },
      { id: "Prague, Czechia", lat: 50.0755, lng: 14.4378 },
      { id: "Dublin, Ireland", lat: 53.3498, lng: -6.2603 },
      { id: "Howth, Ireland", lat: 53.3873, lng: -6.0707 }
    ],
    photos: [
      { src: "assets/photos/2017 Lozovac Croatia.jpg", alt: "2017 Lozovac Croatia.jpg", city: "Lozovac, Croatia", date: "2017" },
      { src: "assets/photos/2019 Reykjavik Iceland.jpg", alt: "2019 Reykjavik Iceland.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2021 Lake Como Italy.jpg", alt: "2021 Lake Como Italy.jpg", city: "Lake Como, Italy", date: "2021" },
      { src: "assets/photos/2022 Jungfraujoch Switzerland.jpg", alt: "2022 Jungfraujoch Switzerland.jpg", city: "Jungfraujoch, Switzerland", date: "2022" },
      { src: "assets/photos/2023 London UK.jpg", alt: "2023 London UK.jpg", city: "London, UK", date: "2023" },
      { src: "assets/photos/2019 Basel Switzerland.jpg", alt: "2019 Basel Switzerland.jpg", city: "Basel, Switzerland", date: "2019" },
      { src: "assets/photos/2021 Dervio Italy.jpg", alt: "2021 Dervio Italy.jpg", city: "Dervio, Italy", date: "2021" },
      { src: "assets/photos/2017 Dubrovnik Croatia.jpg", alt: "2017 Dubrovnik Croatia.jpg", city: "Dubrovnik, Croatia", date: "2017" },
      { src: "assets/photos/2019 Reykjavik Iceland 02.jpg", alt: "2019 Reykjavik Iceland 02.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 03.jpg", alt: "2019 Reykjavik Iceland 03.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 04.jpg", alt: "2019 Reykjavik Iceland 04.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 05.jpg", alt: "2019 Reykjavik Iceland 05.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 06.jpg", alt: "2019 Reykjavik Iceland 06.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 07.jpg", alt: "2019 Reykjavik Iceland 07.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2019 Reykjavik Iceland 08.jpg", alt: "2019 Reykjavik Iceland 08.jpg", city: "Reykjavik, Iceland", date: "2019" },
      { src: "assets/photos/2017 Mostar Bosnia and Herzegovina.jpg", alt: "2017 Mostar Bosnia and Herzegovina.jpg", city: "Mostar, Bosnia and Herzegovina", date: "2017" },
      { src: "assets/photos/2018 Oslo Norway.jpg", alt: "2018 Oslo Norway.jpg", city: "Oslo, Norway", date: "2018" },
      { src: "assets/photos/2016 Rovaniemi Finland.jpg", alt: "2016 Rovaniemi Finland.jpg", city: "Rovaniemi, Finland", date: "2016" },
      { src: "assets/photos/2018 Stranda Norway.jpg", alt: "2018 Stranda Norway.jpg", city: "Stranda, Norway", date: "2018" },
      { src: "assets/photos/2018 Vestland Norway.jpg", alt: "2018 Vestland Norway.jpg", city: "Vestland, Norway", date: "2018" },
      { src: "assets/photos/2020 Wolschwiller France.jpg", alt: "2020 Wolschwiller France.jpg", city: "Wolschwiller, France", date: "2020" },
      { src: "assets/photos/2024 Amsterdam Netherlands.jpg", alt: "2024 Amsterdam Netherlands.jpg", city: "Amsterdam, Netherlands", date: "2024" },
      { src: "assets/photos/2024 Berlin Germany.jpg", alt: "2024 Berlin Germany.jpg", city: "Berlin, Germany", date: "2024" },
      { src: "assets/photos/2024 Prague Czechia.jpg", alt: "2024 Prague Czechia.jpg", city: "Prague, Czechia", date: "2024" },
      { src: "assets/photos/2025 Dublin Ireland.jpg", alt: "2025 Dublin Ireland.jpg", city: "Dublin, Ireland", date: "2025" },
      { src: "assets/photos/2025 Howth Ireland.jpg", alt: "2025 Howth Ireland.jpg", city: "Howth, Ireland", date: "2025" },
      { src: "assets/photos/2025 Howth Ireland 02.jpg", alt: "2025 Howth Ireland 02.jpg", city: "Howth, Ireland", date: "2025" },
      { src: "assets/photos/2025 Howth Ireland 03.jpg", alt: "2025 Howth Ireland 03.jpg", city: "Howth, Ireland", date: "2025" },
      { src: "assets/photos/2025 Howth Ireland 04.jpg", alt: "2025 Howth Ireland 04.jpg", city: "Howth, Ireland", date: "2025" }
    ]
  },
  {
    name: "Africa",
    cities: [
      { id: "Maasai Mara, Kenya", lat: -1.4061, lng: 35.0400 },
      { id: "Marrakech, Morocco", lat: 31.6295, lng: -7.9811 },
      { id: "Taouz, Morocco", lat: 30.9203, lng: -3.9946 }
    ],
    photos: [
      { src: "assets/photos/2022 Maasai Mara Kenya.jpg", alt: "2022 Maasai Mara Kenya.jpg", city: "Maasai Mara, Kenya", date: "2022" },
      { src: "assets/photos/2022 Marrakech Morocco.jpg", alt: "2022 Marrakech Morocco.jpg", city: "Marrakech, Morocco", date: "2022" },
      { src: "assets/photos/2022 Marrakech Morocco 02.jpg", alt: "2022 Marrakech Morocco 02.jpg", city: "Marrakech, Morocco", date: "2022" },
      { src: "assets/photos/2022 Taouz Morocco.jpg", alt: "2022 Taouz Morocco.jpg", city: "Taouz, Morocco", date: "2022" },
      { src: "assets/photos/2022 Taouz Morocco 02.jpg", alt: "2022 Taouz Morocco 02.jpg", city: "Taouz, Morocco", date: "2022" }
    ]
  },
  {
    name: "North America",
    cities: [
      { id: "Cleveland, USA", lat: 41.4993, lng: -81.6944 },
      { id: "Grand Teton National Park, USA", lat: 43.7904, lng: -110.6818 },
      { id: "Kitty Hawk, USA", lat: 36.0640, lng: -75.7050 },
      { id: "New York City, USA", lat: 40.7128, lng: -74.0060 },
      { id: "Outer Banks, USA", lat: 36.0896, lng: -75.6674 },
      { id: "Philadelphia, USA", lat: 39.9526, lng: -75.1652 },
      { id: "Poconos, USA", lat: 41.1710, lng: -75.2900 },
      { id: "Yellowstone National Park, USA", lat: 44.4280, lng: -110.5885 },
      { id: "Baltimore, USA", lat: 39.2904, lng: -76.6122 },
      { id: "Washington, USA", lat: 38.9072, lng: -77.0369 },
      { id: "Nags Head, USA", lat: 35.9590, lng: -75.6248 },
      { id: "Jockeys Ridge, USA", lat: 35.9640, lng: -75.6330 },
      { id: "Harpers Ferry, USA", lat: 39.3254, lng: -77.7397 }
    ],
    photos: [
      { src: "assets/photos/2023 Yellowstone National Park USA.jpg", alt: "2023 Yellowstone National Park USA.jpg", city: "Yellowstone National Park, USA", date: "2023" },
      { src: "assets/photos/2023 Philadelphia USA.jpg", alt: "2023 Philadelphia USA.jpg", city: "Philadelphia, USA", date: "2023" },
      { src: "assets/photos/2023 Outer Banks USA.jpg", alt: "2023 Outer Banks USA.jpg", city: "Outer Banks, USA", date: "2023" },
      { src: "assets/photos/2023 Poconos USA.jpg", alt: "2023 Poconos USA.jpg", city: "Poconos, USA", date: "2023" },
      { src: "assets/photos/2024 New York City USA.jpg", alt: "2024 New York City USA.jpg", city: "New York City, USA", date: "2024" },
      { src: "assets/photos/2024 Cleveland USA.jpg", alt: "2024 Cleveland USA.jpg", city: "Cleveland, USA", date: "2024" },
      { src: "assets/photos/2023 Kitty Hawk USA.jpg", alt: "2023 Kitty Hawk USA.jpg", city: "Kitty Hawk, USA", date: "2023" },
      { src: "assets/photos/2023 Grand Teton National Park USA.jpg", alt: "2023 Grand Teton National Park USA.jpg", city: "Grand Teton National Park, USA", date: "2023" },
      { src: "assets/photos/2023 Poconos USA 02.jpg", alt: "2023 Poconos USA 02.jpg", city: "Poconos, USA", date: "2023" },
      { src: "assets/photos/2023 Poconos USA 03.jpg", alt: "2023 Poconos USA 03.jpg", city: "Poconos, USA", date: "2023" },
      { src: "assets/photos/2023 Grand Teton National Park USA 02.jpg", alt: "2023 Grand Teton National Park USA 02.jpg", city: "Grand Teton National Park, USA", date: "2023" },
      { src: "assets/photos/2023 Yellowstone National Park USA 02.jpg", alt: "2023 Yellowstone National Park USA 02.jpg", city: "Yellowstone National Park, USA", date: "2023" },
      { src: "assets/photos/2024 Baltimore USA.jpg", alt: "2024 Baltimore USA.jpg", city: "Baltimore, USA", date: "2024" },
      { src: "assets/photos/2024 Baltimore USA 02.jpg", alt: "2024 Baltimore USA 02.jpg", city: "Baltimore, USA", date: "2024" },
      { src: "assets/photos/2024 Washington DC USA.jpg", alt: "2024 Washington DC USA.jpg", city: "Washington, USA", date: "2024" },
      { src: "assets/photos/2024 New York City USA 02.jpg", alt: "2024 New York City USA 02.jpg", city: "New York City, USA", date: "2024" },
      { src: "assets/photos/2024 Nags Head USA.jpg", alt: "2024 Nags Head USA.jpg", city: "Nags Head, USA", date: "2024" },
      { src: "assets/photos/2024 Jockeys Ridge USA.jpg", alt: "2024 Jockeys Ridge USA.jpg", city: "Jockeys Ridge, USA", date: "2024" },
      { src: "assets/photos/2025 Harpers Ferry USA.jpg", alt: "2025 Harpers Ferry USA.jpg", city: "Harpers Ferry, USA", date: "2025" }
    ]
  },
  {
    name: "South America",
    cities: [
      { id: "Galápagos Islands, Ecuador", lat: -0.9538, lng: -90.9656 }
    ],
    photos: [
      { src: "assets/photos/2023 Galapagos Islands Ecuador.jpg", alt: "2023 Galapagos Islands Ecuador.jpg", city: "Galápagos Islands, Ecuador", date: "2023" },
      { src: "assets/photos/2023 Galapagos Islands Ecuador 02.jpg", alt: "2023 Galapagos Islands Ecuador 02.jpg", city: "Galápagos Islands, Ecuador", date: "2023" },
      { src: "assets/photos/2023 Galapagos Islands Ecuador 03.jpg", alt: "2023 Galapagos Islands Ecuador 03.jpg", city: "Galápagos Islands, Ecuador", date: "2023" },
      { src: "assets/photos/2023 Galapagos Islands Ecuador 04.jpg", alt: "2023 Galapagos Islands Ecuador 04.jpg", city: "Galápagos Islands, Ecuador", date: "2023" },
      { src: "assets/photos/2023 Galapagos Islands Ecuador 05.jpg", alt: "2023 Galapagos Islands Ecuador 05.jpg", city: "Galápagos Islands, Ecuador", date: "2023" }
    ]
  },
  {
    name: "Oceania",
    cities: [
      { id: "Cairns, Australia", lat: -16.9186, lng: 145.7781 },
      { id: "Hobbiton, New Zealand", lat: -37.8720, lng: 175.6820 },
      { id: "Mount Creighton, New Zealand", lat: -45.1010, lng: 168.5400 },
      { id: "Queenstown, New Zealand", lat: -45.0312, lng: 168.6626 },
      { id: "South Island, New Zealand", lat: -45.1527, lng: 169.8923 },
      { id: "Summerlands, Australia", lat: -38.5120, lng: 145.1460 },
      { id: "Sydney, Australia", lat: -33.8688, lng: 151.2093 }
    ],
    photos: [
      { src: "assets/photos/2024 Sydney Australia.jpg", alt: "2024 Sydney Australia.jpg", city: "Sydney, Australia", date: "2024" },
      { src: "assets/photos/2024 Sydney Australia 02.jpg", alt: "2024 Sydney Australia 02.jpg", city: "Sydney, Australia", date: "2024" },
      { src: "assets/photos/2024 Cairns Australia.jpg", alt: "2024 Cairns Australia.jpg", city: "Cairns, Australia", date: "2024" },
      { src: "assets/photos/2025 Queenstown New Zealand.jpg", alt: "2025 Queenstown New Zealand.jpg", city: "Queenstown, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Hobbiton New Zealand.jpg", alt: "2025 Hobbiton New Zealand.jpg", city: "Hobbiton, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Hobbiton New Zealand 02.jpg", alt: "2025 Hobbiton New Zealand 02.jpg", city: "Hobbiton, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Mount Creighton New Zealand.jpg", alt: "2025 Mount Creighton New Zealand.jpg", city: "Mount Creighton, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Mount Creighton New Zealand 02.jpg", alt: "2025 Mount Creighton New Zealand 02.jpg", city: "Mount Creighton, New Zealand", date: "2025" },
      { src: "assets/photos/2025 South Island New Zealand.jpg", alt: "2025 South Island New Zealand.jpg", city: "South Island, New Zealand", date: "2025" },
      { src: "assets/photos/2025 South Island New Zealand 02.jpg", alt: "2025 South Island New Zealand 02.jpg", city: "South Island, New Zealand", date: "2025" },
      { src: "assets/photos/2025 South Island New Zealand 03.jpg", alt: "2025 South Island New Zealand 03.jpg", city: "South Island, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Queenstown New Zealand 02.jpg", alt: "2025 Queenstown New Zealand 02.jpg", city: "Queenstown, New Zealand", date: "2025" },
      { src: "assets/photos/2025 Queenstown New Zealand 03.jpg", alt: "2025 Queenstown New Zealand 03.jpg", city: "Queenstown, New Zealand", date: "2025" },
      { src: "assets/photos/2024 Summerlands Australia.jpg", alt: "2024 Summerlands Australia.jpg", city: "Summerlands, Australia", date: "2024" },
      { src: "assets/photos/2024 Summerlands Australia 02.jpg", alt: "2024 Summerlands Australia 02.jpg", city: "Summerlands, Australia", date: "2024" },
      { src: "assets/photos/2024 Sydney Australia 03.jpg", alt: "2024 Sydney Australia 03.jpg", city: "Sydney, Australia", date: "2024" },
      { src: "assets/photos/2024 Sydney Australia 04.jpg", alt: "2024 Sydney Australia 04.jpg", city: "Sydney, Australia", date: "2024" }
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

window.homePhotoLookup = {
  "Philadelphia, USA": [
    { src: "assets/photos/2023 Philadelphia USA.jpg", alt: "2023 Philadelphia USA.jpg", location: "Philadelphia, USA", date: "2023" }
  ],
  "Baltimore, USA": [
    { src: "assets/photos/2024 Baltimore USA.jpg", alt: "2024 Baltimore USA.jpg", location: "Baltimore, USA", date: "2024" },
    { src: "assets/photos/2024 Baltimore USA 02.jpg", alt: "2024 Baltimore USA 02.jpg", location: "Baltimore, USA", date: "2024" }
  ],
  "Basel, Switzerland": [
    { src: "assets/photos/2019 Basel Switzerland.jpg", alt: "2019 Basel Switzerland.jpg", location: "Basel, Switzerland", date: "2019" }
  ],
  "Washington, USA": [
    { src: "assets/photos/2024 Washington DC USA.jpg", alt: "2024 Washington DC USA.jpg", location: "Washington, USA", date: "2024" }
  ],
  "Nags Head, USA": [
    { src: "assets/photos/2024 Nags Head USA.jpg", alt: "2024 Nags Head USA.jpg", location: "Nags Head, USA", date: "2024" }
  ],
  "Jockeys Ridge, USA": [
    { src: "assets/photos/2024 Jockeys Ridge USA.jpg", alt: "2024 Jockeys Ridge USA.jpg", location: "Jockeys Ridge, USA", date: "2024" }
  ],
  "Harpers Ferry, USA": [
    { src: "assets/photos/2025 Harpers Ferry USA.jpg", alt: "2025 Harpers Ferry USA.jpg", location: "Harpers Ferry, USA", date: "2025" }
  ]
};

window.homeBases = [
  {
    name: "Philadelphia, USA",
    lat: 40.1784,
    lng: -75.1281,
    detail: "Horsham, Pennsylvania"
  },
  {
    name: "San Francisco, USA",
    lat: 37.5586,
    lng: -122.2711,
    detail: "Foster City, California"
  },
  {
    name: "Boston, USA",
    lat: 42.4851,
    lng: -71.4328,
    detail: "Acton, Massachusetts"
  },
  {
    name: "Baltimore, USA",
    lat: 39.3299,
    lng: -76.6205,
  },
  {
    name: "Pittsburgh, USA",
    lat: 40.4440,
    lng: -79.9558,
    detail: "Oakland"
  },
  {
    name: "Basel, Switzerland",
    lat: 47.4927,
    lng: 7.5913,
    detail: "Reinach"
  },
  {
    name: "Moscow, Russia",
    lat: 55.7903,
    lng: 37.5244,
  }
];
