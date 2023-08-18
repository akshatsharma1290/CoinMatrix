import PropTypes from "prop-types";

export default function ChooseBox({ img, title, text }) {
  return (
    <>
      <div className="text-slate-100 bg-[#ffffff0d] w-[90vw] rounded-[2rem] p-6 flex gap-8 font-noto border border-[#82828240] md:w-[70vw] md:justify-center lg:w-[22rem] ">
        <div className="bg-gradient-purple p-7 flex justify-center items-center w-14 h-14 rounded-xl">
          <i className={`${img} text-3xl`}></i>
        </div>
        <div className="flex flex-col gap-4 items-baseline">
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-lg font-light">{text}</p>
        </div>
      </div>
    </>
  );
}

ChooseBox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
