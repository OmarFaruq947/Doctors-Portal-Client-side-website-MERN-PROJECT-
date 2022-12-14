import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
        <div className="hero-content flex-col lg:flex-row-reverse  max-w-7xl mx-auto px-12">
          <img
            src={chair}
            alt="..."
            className="lg:max-w-xl md:max-w-lg sm:max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
