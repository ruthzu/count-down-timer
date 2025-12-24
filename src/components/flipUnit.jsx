import { useEffect, useRef, useState } from "react";

export default function FlipUnit({ value, label }) {
  const prevRef = useRef(value);
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value === prevRef.current) return;

    const flip = () => {
      setIsFlipping(true);

      setTimeout(() => {
        setIsFlipping(false);
        prevRef.current = value;
        setPrevValue(value);
      }, 600); // match animation duration
    };

    requestAnimationFrame(flip);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      {/* Card container */}
      <div className="relative w-20 h-28 perspective">
        {/* Static number */}
        <div
          className={`absolute w-full h-full rounded-xl flex items-center justify-center text-4xl bg-gradient-to-b from-gray-700 to-gray-900 border border-black shadow-md ${
            isFlipping ? "flip-card" : ""
          } text-[hsl(345,95%,68%)]`}
        >
          {prevValue}
        </div>

        {/* Flipping number */}
        {isFlipping && (
          <div className="absolute w-full h-full rounded-xl flex items-center justify-center text-4xl bg-gradient-to-b from-gray-700 to-gray-900 border border-black shadow-md flip-card-next text-[hsl(345,95%,68%)]">
            {value}
          </div>
        )}
      </div>

      {/* Label */}
      <span className="mt-2 text-[hsl(237,18%,59%)] text-sm font-medium">
        {label}
      </span>
    </div>
  );
}
