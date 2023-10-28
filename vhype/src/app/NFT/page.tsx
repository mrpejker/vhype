import Image from "next/image";
import EmailComponent from "./emailform";

function YourComponent() {
  return (
    <div className="relative h-[440px] w-[440px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 translate-y-[15%] scale-110 transform">
        <Image
          src="/back2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </div>
      {/* GIF */}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
        <Image src="/gif.gif" alt="GIF" width={400} height={400} />
      </div>
    </div>
  );
}

const Page = () => {
  //const gifUrl = "/gif.gif";

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <h1 className="mb-8 text-4xl font-bold">
        Amazing! You're so lucky today!
      </h1>

      {/* Image and GIF */}
      <YourComponent />
      {/* Email Input */}
      <EmailComponent />
    </div>
  );
};

export default Page;
