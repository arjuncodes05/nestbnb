import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const LoginBoxes = ({type, setShowLoginBox, setMobileMenu}) => {

  const {BASE_URL} = useAppContext();

  return (
    <div className={`${type === 'mobile' && 'absolute translate-x-50'}`}>
      <span className={`absolute ${type === 'desktop' ? 'left-10 -bottom-5 border-b-white' : 'border-b-black/60 right-36 top-1.5'} w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[14px] `}></span>

      <div className={`absolute  text-black right-0 py-8 top-full mt-5 flex flex-col gap-2 justify-center items-center rounded-md shadow-2xl ${type === 'desktop' ? 'bg-white w-96' : 'bg-black/60 w-78'}`}>
        <p className={`font-medium ${type === 'desktop' ? 'text-gray-900 text-lg' : 'text-white text-md'}`}>
          Sign in/Sign up to Nestbnb
        </p>

        {/* Google */}
        <button
          onClick={() => {
            setShowLoginBox({desktop: false, mobile: false}); 
            type === 'mobile' && setMobileMenu(false);

            if(type === 'desktop'){
                window.open(
                    `${BASE_URL}/auth/google`,
                    "_blank",
                    "width=800,height=550,top=100,left=350"
                );
            } else{
                window.open(`${BASE_URL}/auth/google`, "_self");
            }
          }}
          className={`flex justify-center items-center gap-2 font-medium border px-2 py-1 border-gray-300 rounded-md w-[80%] shadow-sm  ${type === 'desktop' ? 'text-gray-600 hover:bg-gray-50' : 'active:scale-95 bg-gray-50'}`}
        >
          <img className="w-5" src={assets.googleLogo} alt="" />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default LoginBoxes;
