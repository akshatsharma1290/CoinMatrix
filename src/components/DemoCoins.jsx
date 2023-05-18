import { useState, useEffect } from "react";
import Loader from "../assets/Loader.gif";
import { floatConverter, priceChange } from "./helpers";
import GetData from "./GetData";
import { NavLink } from 'react-router-dom'

export default function DemoCoins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetData({ perpage: 4, page: 1 });
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="hidden mt-10 xl:flex xl:gap-x-28 justify-center w-full sm:grid grid-cols-2 px-16 gap-x-44 gap-y-10 md:mt-8 md:grid-cols-4 md:gap-x-0 md:px-4 lg:gap-x-0  text-slate-100 font-space font-bold">
        {loading && <img src={Loader} className="h-24" alt="loader" />}
        {!loading &&
          data.map((data) => {
            return (
              <NavLink
                className="flex justify-center items-center flex-col cursor-pointer"
                key={data.id}
                to={`/coin/${data.name.toLowerCase()}`}
              >
                <img
                  className="h-24
"
                  src={data.image}
                  alt={data.name}
                />
                <div className="space-x-3 mt-2">
                  <span className="text-xl">{data.name}</span>
                  {priceChange(data.price_change_percentage_24h)}
                </div>
                <p className="text-2xl mt-2">
                  $ {floatConverter(data.current_price)}
                </p>
              </NavLink>
            );
          })}
      </div>
    </>
  );
}
