"use client";

import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const router = useRouter();

  const pushTo = (route: string) => {
    router.push(route);
  };

  return (
    <div className="">
      <img
        className="cursor-pointer"
        src="/banner3.png"
        onClick={() => pushTo("/working")}
      />
    </div>
  );
};

export default HeroBanner;

