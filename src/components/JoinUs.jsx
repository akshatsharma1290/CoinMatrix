import BigText from "./BigText";

export default function JoinUs() {
  return (
    <>
      <section
        className="joinus flex flex-col items-center my-24 font-space scroll-mt-28"
        id="join"
      >
        <div className="relative flex flex-col items-center">
          <div className="lg:mx-14">
            <BigText text1="Join Us Via" text2="discord" />
          </div>
          <p className="text-slate-100 text-2xl text-center my-4 px-8 md:w-fit">
            Invest and manage all your crypto at one place.
          </p>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-100 m-auto font-space font-bold gap-3 rounded-full justify-center items-center flex w-72 mt-6 h-fit p-4 bg-gradient-purple text-xl"
          >
            Join Via Discord
          </a>
        </div>
      </section>
    </>
  );
}
