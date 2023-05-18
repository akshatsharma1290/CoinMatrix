import ChooseBox from "./ChooseBox";
import bitHand from "../assets/bit-hand.png";

export default function ChooseUs() {
  return (
    <>
      <section
        className="choose-us mt-16 flex flex-col items-center font-noto scroll-mt-28"
        id="choose-us"
      >
        <h2 className="text-center font-bold text-7xl w-11/12 leading-[5rem] uppercase">
          <span className="text-slate-100">Why</span>{" "}
          <span className="bg-clip-text bg-gradient-purple text-transparent">
            Choose Us
          </span>
        </h2>
        <div className="mt-24 flex flex-col lg:flex-row items-center lg:px-10 xl:px-0">
          <div className="flex flex-col gap-8 mb-10 lg:self-baseline ">
            <ChooseBox
              img="fa-solid fa-wallet"
              title="CONNECT YOUR WALLET"
              text="Use Trust Wallet, Metamask or to connect to the app."
            />
            <ChooseBox
              img="fa-solid fa-pen-ruler"
              title="SELECT YOUR QUANTITY"
              text="Upload your crypto and set a title, description and price."
            />
            <ChooseBox
              img="fa-solid fa-bolt"
              title="CONFIRM TRANSACTION"
              text="Earn by selling your crypto on our marketplace."
            />
          </div>
          <div className="flex justify-center mx-12">
            <img
              src={bitHand}
              className="w-2/5 lg:w-3/4 xl:w-80"
              alt="Illustration of hand holding a bitcoin."
            />
          </div>
          <div className="flex flex-col gap-8 mt-10 lg:self-baseline ">
            <ChooseBox
              img="fa-solid fa-satellite-dish"
              title="RECEIVE YOUR OWN NFTS"
              text="Invest all your crypto at one place on one platform."
            />
            <ChooseBox
              img="fa-solid fa-chess-knight"
              title="TAKE A MARKET
                  TO SELL"
              text="Discover, collect the right crypto collections to buy or sell."
            />
            <ChooseBox
              img="fa-solid fa-boxes-stacked"
              title="DRIVE YOUR COLLECTION"
              text="We make it easy to Discover, Invest and manage."
            />
          </div>
        </div>
      </section>
    </>
  );
}
