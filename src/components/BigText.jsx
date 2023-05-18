import bitcoinImg from "../assets/bitcoin-img.png";
import ethereumImg from "../assets/ethereum-img.png";

export default function BigText({ text1, text2 }) {
  return (
    <>
      <p className="uppercase text-5xl text-center px-4 font-space font-bold leading-[3.5rem] sm:w-auto sm:text-6xl sm:leading-[4rem] md:text-7xl xl:text-8xl">
        <span className="text-slate-100">{text1}</span> <br />{" "}
        <span className="!bg-clip-text text-transparent bg-gradient-purple">
          {text2}
        </span>
      </p>
      <img
        className="hidden lg:block absolute h-20 top-2 -left-20 
            xl:-left-10 animate-bounce"
        src={bitcoinImg}
        alt="bitcoin-image"
      />
      <img
        className="hidden lg:block absolute h-20 top-2 -right-20  
            xl:-right-10 animate-bounce"
        src={ethereumImg}
        alt="ethereum-image"
      />
    </>
  );
}
