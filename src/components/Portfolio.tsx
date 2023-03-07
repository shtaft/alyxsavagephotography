import { useEffect, useState } from "react";
import { portfolio } from "../content";

export default function Portfolio() {
  const [queued, setQueued] = useState<any>(null);
  const [selected, setSelected] = useState(portfolio[0]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setSelected(queued || selected);
      setFadeIn(true);
    }, 1000);

    return () => clearTimeout(fadeTimeout);
  }, [queued]);

  return (
    <>
      <div className="hidden lg:block px-12">
        <div className="grid grid-cols-[2fr_1fr] gap-12">
          <div className="h-full">
            <div
              style={{
                height: "calc(100% - 600px)",
              }}
            ></div>
            <div
              className={`sticky bottom-0 pb-6 ${
                fadeIn ? "animate-fade-in" : "animate-fade-out"
              }`}
            >
              <div className="grid grid-cols-[1fr_2fr] gap-6">
                <div className="flex flex-col justify-end">
                  <p className="text-md uppercase whitespace-pre">
                    {selected.category}
                  </p>
                  <p className="text-sm uppercase whitespace-pre">
                    {selected.type}
                  </p>
                </div>
                <img className="max-w-full px-6" src={selected.src} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {portfolio.map((content) => (
              <div
                key={content.src}
                onClick={() => {
                  setFadeIn(false);
                  setQueued(content);
                }}
                className="cursor-pointer"
              >
                <img
                  className="h-full w-full object-cover hover:shadow-2xl transition-all duration-700"
                  src={content.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="visible lg:hidden">
        <div className="space-y-12 flex flex-col items-center">
          {portfolio.map((content) => (
            <div key={content.src} className="flex flex-col space-y-3">
              <img className="" src={content.src} />
              <p className="text-2xl uppercase px-6 md:px-0">
                {content.category}
              </p>
              <p className="text-sm uppercase px-6 md:px-0">{content.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
