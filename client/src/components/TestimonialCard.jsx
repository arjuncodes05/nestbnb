import { assets } from "../assets/assets"

const TestimonialCard = ({item}) => {

    const handleRating = (rating) => {
        const maxRating = 5;
        const stars = []
        for(let i = 0; i < maxRating; i++){
            stars.push(
                <img
                    key={i}
                    src={i < rating ? assets.starIconFilled : assets.starIconOutlined}
                    alt="star icon"
                />
            );
        }
        return stars
    }

  return (
        <div className="py-8 px-6 border border-gray-200 bg-white rounded-lg shadow-md space-y-4 max-w-100 md:w-fit">
            <div className="flex items-center gap-2">
                <img src={item.image} alt="user image" className="h-10 rounded-full" />
                <p className="font-playfair text-lg md:text-2xl">{item.name}</p>
            </div>
            <div className="flex gap-1.5">
                {handleRating(item.rating).map((item) => item)}
            </div>
            <p className="text-gray-500 text-sm md:text-base">{item.review}</p>
        </div>
  );
};

export default TestimonialCard;
