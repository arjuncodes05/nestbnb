
const Title = ({title, subtitle, textColor, align}) => {
  return (
    <div className={`flex justify-center gap-2 mt-8 flex-col text-center items-center ${align === "start" && "md:items-start md:text-left"} w-full cursor-default px-4 ${textColor === "white" && "text-white"}`}>
      <h2 className="font-playfair text-4xl lg:text-5xl font-medium">
        {title}
      </h2>
      <p className={`text-sm md:text-base ${textColor === 'white' ? 'text-white/50' : 'text-gray-500'} w-3/4 lg:w-2/3`}>
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
