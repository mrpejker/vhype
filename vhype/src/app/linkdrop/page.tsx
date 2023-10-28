import Link from "next/link";

const PrizePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="p-4 text-2xl font-bold">Win one of the unique prizes</h1>
      <p className="p-4 text-xl">
        Click the card to take your chances and unveil hidden treasure
      </p>
      <p>
        <img
          src="/arrow.png"
          alt="Arrow Image"
          className="mb-[0.5cm] h-auto w-[2cm]"
        />
      </p>
      <Link href="/reward">
        <img
          src="prize1.png"
          alt="Prize clickable picture"
          className="cursor-pointer hover:opacity-75"
        />
      </Link>
    </div>
  );
};

export default PrizePage;
