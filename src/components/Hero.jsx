import TextWithVisuals from "./TextWithVisuals";

export default function Hero() {
  return (
    <>
      <section
        className="hero flex flex-col items-center pt-40 bg-gradient-home"
        id="home"
      >
        <div className="relative">
          <h1>
            <TextWithVisuals text1="track and trade" text2="crypto currencies" />
          </h1>
        </div>
        <a
          href="#market"
          rel="noreferrer"
          className="text-slate-100 m-auto font-space font-bold gap-3 rounded-full justify-center items-center flex w-2/3 mt-6 h-fit p-4 bg-gradient-purple text-xl sm:hidden"
        >
          See Prices <i className="fa-solid fa-angle-down"></i>
        </a>
      </section>
    </>
  );
}
