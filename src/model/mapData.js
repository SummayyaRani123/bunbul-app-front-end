const HorizontalPosterImages = [
  { image: require("./images/hbo.jpg") },
  { image: require("./images/horizontalposter1.png") },
  { image: require("./images/Netflix.png") },
  { image: require("./images/horizontalposter2.png") },
];
const   VerticalPosterImages = [
  { image: require("./images/hbo.jpg") },
  { image: require("./images/verticalposter1.png") },
  { image: require("./images/spotify.png") },
  { image: require("./images/verticalposter2.png") },
  { image: require("./images/youtube.png") },
  { image: require("./images/verticalposter3.png") },
  { image: require("./images/disney.jpg") },
  { image: require("./images/verticalposter4.png") },
];

export const HorizontalPoster = [
    {
      id:1,
      span:2,
      title: "Now Showing on HBO",
      description: "Lorem ipsum dolor sit amet",
      logo: HorizontalPosterImages[0].image,
      image: HorizontalPosterImages[1].image,
      color:'#FFAD12',
      type:'HBOmax'
    },
    {
      id:2,
      span:2,
      title: "Now Streaming on Netflix",
      description:"Lorem ipsum dolor sit amet",
      logo: HorizontalPosterImages[2].image,
      image: HorizontalPosterImages[3].image,
      color:'#FA8952',
      type:'Netflix'
    },
    {
      id:3,
      span:1,
      title: "Now Showing on HBO",
      description: "Lorem ipsum",
      logo:VerticalPosterImages[0].image,
      image: VerticalPosterImages[1].image,
      color:'#591505',
      type:'HBOmax'
    },
    {
      id:4,
      span:1,
      title: "Now Showing on Spotify",
      description: "Lorem ipsum",
      logo:VerticalPosterImages[2].image,
      image: VerticalPosterImages[3].image,
      color:'#4D4D4D',
      type:'Spotify'
    },
    {
      id:5,
      span:1,
      title: "Now Streaming on YouTube Music",
      description: "Lorem ipsum",
      logo:VerticalPosterImages[4].image,
      image: VerticalPosterImages[5].image,
      color:'#DFDFDF',
      type:'Youtube'
    },
    {
      id:6,
      span:1,
      title: "Now Showing on Disney +",
      description: "Lorem ipsum",
      logo:VerticalPosterImages[6].image,
      image: VerticalPosterImages[7].image,
      color:'#2F2E6A',
      type:'Disney'
    },
];
export const VerticalPoster = [
  {
    title: "Now Showing on HBO",
    description: "Lorem ipsum",
    logo:VerticalPosterImages[0].image,
    image: VerticalPosterImages[1].image,
    color:'#591505',
    type:'HBOmax'
  },
  {
    title: "Now Showing on HBO",
    description: "Lorem ipsum",
    logo:VerticalPosterImages[2].image,
    image: VerticalPosterImages[3].image,
    color:'#4D4D4D',
    type:'Spotify'
  },
  {
    title: "Now Streaming on YouTube Music",
    description: "Lorem ipsum",
    logo:VerticalPosterImages[4].image,
    image: VerticalPosterImages[5].image,
    color:'#DFDFDF',
    type:'Youtube'
  },
  {
    title: "Now Showing on Disney +",
    description: "Lorem ipsum",
    logo:VerticalPosterImages[6].image,
    image: VerticalPosterImages[7].image,
    color:'#2F2E6A',
    type:'Disney'
  },

];

