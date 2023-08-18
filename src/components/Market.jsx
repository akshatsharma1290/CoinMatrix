import { useState, useEffect } from "react";
import { floatConverter, priceChange, numberWithCommas } from "./helpers";
import Loader from "../assets/Loader.gif";
import GetData from "./GetData";
import { NavLink } from "react-router-dom";

export default function Market() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetData({ perpage: 10, page: currentPage });
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const paginationButtons = [];

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        className={`cursor-pointer w-12 h-12 rounded-full border-2 border-slate-700 ${
          i === currentPage
            ? "bg-gradient-purple text-slate-100"
            : "bg-slate-100 text-black"
        } `}
        onClick={() => {
          setCurrentPage(i);
        }}
        key={i}
      >
        {i}
      </button>
    );
  }

  const scrollMarketTop = () => {
    const marketElement = document.querySelector("#market");
    window.scrollTo({
      top: marketElement.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="market px-7 font-space xl:px-10 xl:flex flex-col items-center relative scroll-mt-28 mt-16"
        id="market"
      >
        <div>
          <h2 className="text-slate-100 text-4xl font-bold">Market Update</h2>
          <section className="overflow-x-auto mt-10">
            <div className="text-slate-100 font-semibold text-2xl flex bg-gradient-purple items-center px-4 pr-8 gap-5 rounded-tl-lg rounded-tr-lg w-fit h-14 bigTablet:w-[95vw] xl:w-[78rem]">
              <p className="w-64 bigTablet:w-[22vw] xl:w-[25rem] ">Coin</p>
              <p className="w-44 bigTablet:w-[24vw] xl:w-56">Price</p>
              <p className="w-60 bigTablet:w-[24vw]  xl:w-[21rem]">
                24th Change
              </p>
              <p className="w-36">Market Cap</p>
            </div>
            <div>
              {loading && (
                <div className="flex justify-center">
                  <img src={Loader} className="h-24 mt-4" alt="loader" />
                </div>
              )}

              {!loading &&
                data.map((data) => {
                  return (
                    <NavLink
                      className="text-slate-100 font-space font-semibold text-2xl flex w-fit items-center py-6 px-4 border-b cursor-pointer hover:bg-[#200840]"
                      key={data.id}
                      to={`/coin/${data.name.toLowerCase()}`}
                      // onClick={scrollTop}
                    >
                      <div className="flex items-center gap-4 w-56 bigTablet:w-[20vw] xl:w-[19rem]">
                        <img src={data.image} className="h-12" alt="" />
                        <p>{data.name}</p>
                      </div>
                      <p className="w-36 text-right bigTablet:w-[17vw] xl:w-56">
                        $ {floatConverter(data.current_price)}
                      </p>
                      <p className="w-52 text-right text-2xl bigTablet:w-[23vw] xl:w-[17rem] ">
                        {priceChange(data.price_change_percentage_24h, "2xl")}
                      </p>
                      <p className="w-[18.5rem] text-right text-xl bigTablet:w-[30vw] lg:w-[33vw] xl:w-[26rem]">
                        $ {numberWithCommas(data.market_cap)}
                      </p>
                    </NavLink>
                  );
                })}
            </div>
          </section>
        </div>
        {!loading && (
          <div
            className="mt-10 flex justify-center gap-5 text-2xl"
            onClick={scrollMarketTop}
          >
            {paginationButtons}
          </div>
        )}
      </section>
    </>
  );
}
