import Image from 'next/image';
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from '@/components/AboutSection/AboutSection';

const content = {
    title: "This is why WarelineTech is the",
    highlight: "#1 Game Development Company",
    description:
      "From immersive gameplay to high-performance engines, our game development services ensure captivating experiences, seamless mechanics, and cutting-edge technology, driving engagement and innovation.",
    features: [
      {
        title: "Custom Game Development",
        description:
          "We craft interactive and visually stunning games tailored to your vision, ensuring immersive storytelling, seamless gameplay, and dynamic user experiences.",
      },
      {
        title: "Cross-Platform Compatibility",
        description:
          "Leverage advanced technologies to develop games that run smoothly across multiple platforms, including PC, consoles, and mobile devices, ensuring a wider audience reach.",
      },
      {
        title: "Optimized Performance & Graphics",
        description:
          "Integrate high-quality graphics, optimized rendering, and smooth performance to deliver an engaging and visually captivating gaming experience.",
      },
    ],
  };
  
const games = [
  { id: 1, imageUrl: '/GamesImages/1.png' },
  { id: 2, imageUrl: '/GamesImages/2.png' },
  { id: 3, imageUrl: '/GamesImages/3.png' },
  { id: 4, imageUrl: '/GamesImages/4.png' },
  { id: 5, imageUrl: '/GamesImages/5.png' },
  { id: 6, imageUrl: '/GamesImages/6.png' },
  { id: 7, imageUrl: '/GamesImages/7.png' },
  { id: 8, imageUrl: '/GamesImages/8.png' },
];

export default function GamesPage() {
  return (
   <>
   <HeroSection
  bgImage="https://images.pexels.com/photos/7135004/pexels-photo-7135004.jpeg?auto=compress&cs=tinysrgb&w=600"
  buttonColor="bg-red-600"
  buttonText="Explore Services"
  headingHighlight="Creating Immersive"
  headingFirstPart="gaming experiences"
  headingLastPart="with cutting-edge technology"
  subtext="Our game development studio brings innovative and engaging games to life, delivering exceptional experiences for players worldwide."
  floatingImages={[
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]}
/>

<AboutSection
        imageSrc="/GamesImages/GameAbout.svg" // Replace with your actual image path
        content={content}
      />

    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">Our Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={game.imageUrl} 
              alt={`Game ${game.id}`} 
              width={300} 
              height={400} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
   </>
  );
}
