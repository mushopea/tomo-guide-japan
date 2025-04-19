
import { Card, CardContent } from "@/components/ui/card";

const hobbies = [
  {
    title: "Admiring flowers at Ueno park",
    image: "/lovable-uploads/988429f1-297c-4b90-ba39-ba12b0537dcb.png"
  },
  {
    title: "People-watching in Shibuya",
    image: "/lovable-uploads/e415176f-e4fb-4327-9afc-d0db33b3e565.png"
  },
  {
    title: "Snacking in Asakusa",
    image: "/lovable-uploads/a1653a6e-d8f9-4916-a157-95d470c21d15.png"
  }
];

const Tomopon = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tomodachi-black">Who is Tomopon?</h2>
          <div className="w-24 h-1 bg-tomodachi-red mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="md:w-1/3">
            <img
              src="/lovable-uploads/c8e585f7-90f1-4a7a-bcc1-ae0d880ac032.png"
              alt="Tomopon Mascot"
              className="w-64 h-64 object-contain mx-auto"
            />
          </div>
          <div className="md:w-2/3 max-w-lg">
            <p className="text-lg text-gray-600">
              Tomopon is our mascot for Tomodachi. Curious, dependable, and a little bit squishy, 
              Tomopon loves discovering new neighborhoods and helping friends through tricky tasks. Top hobbies:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`${hobby.image} w-full h-48`}></div>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-tomodachi-black text-center">{hobby.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tomopon;
