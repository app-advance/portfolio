import React from "react";
import { useRouter } from "next/router";

const logo = new URL("../../assets/LogoHorizontal.png", import.meta.url);

export default function Home() {
  const router = useRouter();

  const handleGo = () => {
    router.push("/privacy");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img src={logo} alt="Лого" width={300} />
      <h2 className="mt-6 mb-12 text-darkblue-400 font-semibold">
        Тун удахгүй
      </h2>
      <p
        className="px-5 py-2.5 border text-white bg-blue-600 border-1 border-blue-600 rounded-xl cursor-pointer hover:bg-blue-200 hover:text-blue-600 duration-500"
        onClick={handleGo}
      >
        Үйлчилгээний нөхцөл үзэх
      </p>
    </div>
  );
}
