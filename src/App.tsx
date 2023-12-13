import React, { useEffect, useRef } from "react";
import Quicks from "./components/quicks";
import gsap from "gsap";

function App() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current.children,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1 }
      );
    }
  }, []);

  return (
    <>
      <div className="w-screen h-screen grid place-content-center bg-primary-bg2">
        <h1 ref={h1Ref} className="text-9xl font-bold text-white">
          {["Q", "U", "I", "C", "K", "S"].map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <div className="fixed bottom-6 right-6 flex gap-4 items-end">
          <Quicks />
        </div>
      </div>
    </>
  );
}

export default App;
