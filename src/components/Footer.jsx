export default function Footer() {
  return (
    <>
      <footer className="md:bg-footer pb-10 bg-center bg-cover md:h-64 lg:h-[22rem] ">
        <div className="flex flex-col items-center text-slate-100">
          <div className="text-4xl flex gap-8">
            <i className="fa-brands fa-twitter hover-gradient cursor-pointer "></i>
            <i className="fa-brands fa-discord hover-gradient cursor-pointer "></i>
            <i className="fa-brands fa-facebook hover-gradient cursor-pointer "></i>
            <i className="fa-brands fa-youtube hover-gradient cursor-pointer "></i>
          </div>
          <div className="flex gap-8 font-space text-xl mt-10">
            <p className="hover-gradient cursor-pointer ">Privacy</p>
            <p className="hover-gradient cursor-pointer ">Terms Of Use</p>
          </div>
          <p className="text-xl mt-5 cursor-pointer hover-gradient">
            Made By @Akshat Sharma
          </p>
        </div>
      </footer>
    </>
  );
}
