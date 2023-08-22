import { configDotenv } from "dotenv";
import 'dotenv/config.js'
import '../../config/database.js';
import City from "../City.js";

let cities = [
    {
      name: "Paris",
      image: "https://media.timeout.com/images/105473116/750/562/image.jpg",
      country: "France",
      description: "Paris, the capital of France, is renowned for its iconic Eiffel Tower, historic Louvre Museum, and charming Seine River. Visitors can enjoy strolls along the romantic streets, indulge in exquisite cuisine, and explore world-class art and culture.",
      coin: "Euro"
    },
    {
      name: "Tokyo",
      image: "https://www.planetware.com/photos-large/JPN/japan-tokyo-asakusa-senso-ji-temple.jpg",
      country: "Japan",
      description: "Tokyo, the vibrant capital of Japan, blends futuristic technology with ancient traditions. Tourists can experience bustling neighborhoods, serene temples, and diverse culinary delights while enjoying the hospitality of the Japanese culture.",
      coin: "Japanese Yen"
    },
    {
      name: "Rome",
      image: "https://romesite.com/images/rome-italy.jpg",
      country: "Italy",
      description: "Rome, the eternal city, boasts ancient ruins like the Colosseum and the Roman Forum. Visitors can immerse themselves in history, savor authentic Italian cuisine, and admire architectural marvels that have stood the test of time.",
      coin: "Euro"
    },
    {
      name: "New York City",
      image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",
      country: "USA",
      description: "New York City, the city that never sleeps, offers iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. Tourists can explore diverse neighborhoods, catch Broadway shows, and relish the energy of this bustling metropolis.",
      coin: "US Dollar"
    },
    {
      name: "Sydney",
      image: "https://sydneyuncovered.com/wp-content/uploads/2021/04/sydney-opera-house.jpg",
      country: "Australia",
      description: "Sydney, Australia's largest city, captivates visitors with the stunning Sydney Opera House and the Sydney Harbour Bridge. Tourists can enjoy pristine beaches, outdoor activities, and a laid-back Aussie lifestyle.",
      coin: "Australian Dollar"
    },
    {
      name: "Barcelona",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Places-To-Visit-In-Barcelona_16th-Dec.jpg",
      country: "Spain",
      description: "Barcelona, a vibrant city in Spain, boasts the unique architecture of Antoni Gaudí, including the Sagrada Familia and Park Güell. Travelers can savor tapas, explore historic streets, and enjoy the Mediterranean atmosphere.",
      coin: "Euro"
    },
    {
      name: "Cape Town",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1",
      country: "South Africa",
      description: "Cape Town, nestled beneath Table Mountain in South Africa, offers breathtaking landscapes, diverse wildlife, and a rich cultural heritage. Tourists can explore the Cape of Good Hope, go on safari, and experience the warmth of the locals.",
      coin: "South African Rand"
    },
    {
      name: "Bangkok",
      image: "https://www.planetware.com/wpimages/2022/03/thailand-bangkok-top-attractions-wat-pho.jpg",
      country: "Thailand",
      description: "Bangkok, the capital of Thailand, entices visitors with ornate temples, bustling markets, and vibrant street life. Tourists can indulge in delicious street food, visit grand palaces, and experience the city's lively nightlife.",
      coin: "Thai Baht"
    },
    {
      name: "Rio de Janeiro",
      image: "https://media.timeout.com/images/105482246/750/422/image.jpg",
      country: "Brazil",
      description: "Rio de Janeiro, Brazil's lively city, is known for its iconic Christ the Redeemer statue, stunning Copacabana beach, and colorful Carnival celebrations. Travelers can enjoy samba music, explore lush rainforests, and soak up the festive atmosphere.",
      coin: "Brazilian Real"
    },
    {
      name: "Venice",
      image: "https://www.touropia.com/gfx/b/2015/08/bridge_of_sighs.jpg",
      country: "Italy",
      description: "Venice, the floating city in Italy, captivates with its intricate canals, historic architecture, and romantic gondola rides. Tourists can experience the Venetian Carnival, savor Italian cuisine, and explore the city's unique charm.",
      coin: "Euro"
    },
    {
      name: "Dubai",
      image: "https://www.seamantours.in/wp-content/uploads/2017/09/dubai-city-tours-from-seaman-tours.jpg",
      country: "United Arab Emirates",
      description: "Dubai, a modern oasis in the desert, amazes with its towering skyscrapers, luxury shopping, and extravagant attractions. Visitors can experience the Burj Khalifa, go on desert safaris, and enjoy world-class entertainment.",
      coin: "United Arab Emirates Dirham"
    },
    {
      name: "Prague",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/69/bb/1d.jpg",
      country:"Czech Republic",
      description: "Prague, the capital of the Czech Republic, enchants with its fairy-tale architecture, historic Charles Bridge, and vibrant Old Town Square. Tourists can explore medieval castles, indulge in Czech beer, and immerse themselves in the city's rich history.",
      coin: "Czech Koruna"
    },
    {
      name: "Machu Picchu",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/02/machu-picchu-cover-img.jpg",
      country:"Peru",
      description: "Machu Picchu, the ancient Incan city in Peru, is a marvel nestled amidst the Andes mountains. Travelers can hike to this archaeological wonder, marvel at the breathtaking views, and connect with the ancient Incan culture.",
      coin: "Peruvian Sol"
    },
    {
      name: "Amsterdam",
      image: "https://www.touropia.com/gfx/b/2014/02/canals_of_amsterdam-1.jpg",
      country: "Netherlands",
      description: "Amsterdam, the Netherlands' capital, charms visitors with its picturesque canals, historic houses, and world-class museums. Tourists can cycle along the city's streets, visit the Anne Frank House, and enjoy Dutch treats.",
      coin: "Euro"
    },
    {
      name: "Seoul",
      image: "https://www.cheapflights.ca/news/wp-content/uploads/sites/148/2017/10/12-cheap-and-free-things-to-do-in-seoul-south-kore-13.jpg",
      country: "South Korea",
      description: "Seoul, the dynamic capital of South Korea, seamlessly blends tradition and modernity. Tourists can explore ancient palaces, indulge in Korean cuisine, and experience the energy of K-pop and vibrant street markets.",
      coin: "South Korean Won"
    }
  ];

  City.insertMany(cities);