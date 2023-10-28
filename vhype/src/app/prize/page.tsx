import Link from "next/link";

//import { Lottery } from "./lottery";

const PrizePage = () => {
  //const handleLotteryClick = () => {
  //  Lottery();
  //};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">Win one of the unique prizes</h1>
      <p className="mb-8 text-2xl">
        Click the card to take your chances and unveil hidden treasure
      </p>
      <p>
        <img
          src="/arrow.png"
          alt="Arrow Image"
          className="mb-[0.5cm] h-auto w-[2cm]"
        />
      </p>
      <img
        src="prize1.png"
        alt="Prize clickable picture"
        className="cursor-pointer hover:opacity-75"
        //onClick={handleLotteryClick}
      />
    </div>
  );
};

export default PrizePage;
