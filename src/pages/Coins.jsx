import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { priceChange, floatConverter } from "../components/helpers";
import DOMPurify from "dompurify";
import Loader from "../assets/Loader.gif";

export default function Coins() {
  const { coinid } = useParams();
  const navigate = useNavigate();
  const [coin, setcoin] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = `https://api.coingecko.com/api/v3/coins/${coinid.toLowerCase()}`;

  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const result = await response.json();
        setcoin(result);
        setLoading(false);
        console.log(result);
      } catch (error) {
        alert("This Coin Details Is Not Available");
        navigate("/#market");
      }
    };
    fetchcoin();
  }, [api, navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      navigate("/#market");
      event.preventDefault();
      return (event.returnValue = "");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      navigate(`/${hash}`);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navigate]);

  return (
    <>
      <section
        className="coins pt-28 lg:pt-32 font-space bg-gradient-home"
        id="coins"
      >
        <div
          className="flex flex-col lg:flex-row items-center 
        lg:items-start text-slate-100 "
        >
          {loading && (
            <div className="flex justify-center w-screen">
              <img src={Loader} className="h-24 mt-4" alt="loader" />
            </div>
          )}
          {!loading && (
            <>
              <div className="flex flex-col lg:justify-center items-center gap-4 border-b-2 border-b-slate-100 lg:border-b-0 lg:border-r-2 lg:border-r-slate-100 w-4/5 pb-7 lg:items-center lg:h-[26rem]">
                <img
                  className="h-48"
                  src={coin.image.large}
                  alt={`${coinid}Image`}
                />
                <p className="text-center font-bold text-3xl">{coin.name}</p>
                <p className="text-center text-xl">
                  Rank: #{coin.coingecko_rank}
                </p>
              </div>
              <div className="mt-5 w-screen">
                <div className="text-xl flex flex-wrap px-7 gap-5 justify-center lg:justify-start">
                  <p>
                    24h Change:{" "}
                    {priceChange(coin.market_data.price_change_percentage_24h)}
                  </p>
                  <p>
                    Price:{" "}
                    <span className="text-emerald-400">
                      {" "}
                      $ {floatConverter(coin.market_data.current_price.usd)}
                    </span>
                  </p>
                  <p>Symbol: {coin.symbol}</p>
                </div>
                {
                  <div className="mt-5">
                    <p
                      className="px-7 overflow-y-auto h-[30rem] text-xl lg:h-[21.5rem]"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          coin.description.en.length > 10
                            ? coin.description.en
                            : "Description Not Available"
                        ),
                      }}
                    ></p>
                  </div>
                }
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
