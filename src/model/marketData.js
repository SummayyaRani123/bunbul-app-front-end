const PopularImages = [
    { image: require("./market/spotify.png") },
    { image: require("./market/Netflix.png") },
    { image: require("./market/hulu.png") },
    { image: require("./market/hbomax.png") },
    { image: require("./market/youtube.png") },
    { image: require("./market/viewall.png") },
  ];
  const   VideoImages = [
    { image: require("./market/Netflix.png") },
    { image: require("./market/hbomax.png") },
    { image: require("./market/disney.png") },
    { image: require("./market/hulu.png") },
    { image: require("./market/peacock.png") },
    { image: require("./market/Paramount.png") },
    { image: require("./market/espn.png") },
    { image: require("./market/viewall.png") },
  ];
  const AudioImages = [
    { image: require("./market/spotify.png") },
    { image: require("./market/applemusic.png") },
    { image: require("./market/youtube.png") },
    { image: require("./market/deezer.png") },
    { image: require("./market/audible.png") },
    { image: require("./market/tidal.png") },
    { image: require("./market/scribd.png") },
    { image: require("./market/viewall.png") },
  ];
  const PersonalCareImages = [
    { image: require("./market/ipsy.png") },
    { image: require("./market/brichbox.png") },
    { image: require("./market/scenbird.png") },
    { image: require("./market/dollar.png") },
    { image: require("./market/viewall.png") },
  ];
  const DeliveryImages = [
    { image: require("./market/dp.png") },
    { image: require("./market/instacart.png") },
    { image: require("./market/UberOne.png") },
    { image: require("./market/lyftpink.png") },
    { image: require("./market/walmart.png") },
    { image: require("./market/viewall.png") },
  ];
  const NewsImages = [
    { image: require("./market/wallstreet.png") },
    { image: require("./market/ft.png") },
    { image: require("./market/newyork.png") },
    { image: require("./market/washington.png") },
    { image: require("./market/Athletic.png") },
    { image: require("./market/viewall.png") },
  ];
  export const Popular = [
      {
        id:1,
        title: "Spotify",
        logo: PopularImages[0].image,
        type:'Spotify'
      },
      {
        id:2,
        title: "Netflix",
        logo: PopularImages[1].image,
        type:'Netflix'
      },
      {
        id:3,
        title: "Hulu",
        logo: PopularImages[2].image,
        type:'Hulu'
      },
      {
        id:4,
        title: "HBO Max",
        logo: PopularImages[3].image,
        type:'HBOmax'
      },
      {
        id:5,
        title: "Youtube Music",
        logo: PopularImages[4].image,
        type:'Youtube'
      },
      {
        id:6,
        title: " ",
        logo: PopularImages[5].image,
      },
  ];
  export const Video = [
    {
      id:1,
      title: "Netflix",
      logo: VideoImages[0].image,
    },
    {
      id:2,
      title: "HBO Max",
      logo: VideoImages[1].image,
    },
    {
      id:3,
      title: "Disney +",
      logo: VideoImages[2].image,
    },
    {
      id:4,
      title: "Hulu",
      logo: VideoImages[3].image,
    },
    {
      id:5,
      title: "Peacock TV",
      logo: VideoImages[4].image,
    },
    {
        id:6,
        title: "Paramount +",
        logo: VideoImages[5].image,
      },
      {
        id:7,
        title: "ESPN +",
        logo: VideoImages[6].image,
      },
    {
      id:8,
      title: " ",
      logo: VideoImages[7].image,
    },
];
export const Audio = [
    {
      id:1,
      title: "Spotify",
      logo: AudioImages[0].image,
    },
    {
      id:2,
      title: "Apple Music",
      logo: AudioImages[1].image,
    },
    {
      id:3,
      title: "YouTube Music",
      logo: AudioImages[2].image,
    },
    {
      id:4,
      title: "Deezer",
      logo: AudioImages[3].image,
    },
    {
      id:5,
      title: "Audible",
      logo: AudioImages[4].image,
    },
    {
        id:6,
        title: "Tidal",
        logo: AudioImages[5].image,
      },
      {
        id:7,
        title: "Scribd",
        logo: AudioImages[6].image,
      },
    {
      id:8,
      title: " ",
      logo: AudioImages[7].image,
    },
];
export const PersonalCare = [
    {
      id:1,
      title: "IPSY",
      logo: PersonalCareImages[0].image,
    },
    {
      id:2,
      title: "Birchbox",
      logo: PersonalCareImages[1].image,
    },
    {
      id:3,
      title: "Scentbird",
      logo: PersonalCareImages[2].image,
    },
    {
      id:4,
      title: "Dollar Shave Club",
      logo: PersonalCareImages[3].image,
    },
    {
      id:5,
      title: "Audible",
      logo: PersonalCareImages[4].image,
    },
    // {
    //   id:6,
    //   title: " ",
    //   logo: PersonalCareImages[5].image,
    // },
];
export const Delivery = [
    {
      id:1,
      title: "Dash Pass",
      logo: DeliveryImages[0].image,
    },
    {
      id:2,
      title: "Insta Cart",
      logo: DeliveryImages[1].image,
    },
    {
      id:3,
      title: "Uber One",
      logo: DeliveryImages[2].image,
    },
    {
      id:4,
      title: "Lyft Pink",
      logo: DeliveryImages[3].image,
    },
    {
      id:5,
      title: "Walmart +",
      logo: DeliveryImages[4].image,
    },
    {
      id:6,
      title: " ",
      logo: DeliveryImages[5].image,
    },
];
export const News = [
    {
      id:1,
      title: "Wall Street Journal (WSJ",
      logo: NewsImages[0].image,
    },
    {
      id:2,
      title: "Financial Times",
      logo: NewsImages[1].image,
    },
    {
      id:3,
      title: "The New York Times",
      logo: NewsImages[2].image,
    },
    {
      id:4,
      title: "Washington Post",
      logo: NewsImages[3].image,
    },
    {
      id:5,
      title: "The Athletic",
      logo: NewsImages[4].image,
    },
    {
      id:6,
      title: " ",
      logo: NewsImages[5].image,
    },
];
  