import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-white h-[40vh] flex flex-col justify-center items-center text-center gap-4">
      <div className="font-bold md:text-5xl text-[35px] flex gap-2  justify-center items-center">Buy Me A Chai <span className="pb-5"><img src="/tea2.png"  width={65} alt="Tea" /></span></div>
      <p className="px-1">
        A CrowdFunding Platform For Creators. Get Funded By Your Fans And
        Followers. Start Now!
      </p>
      <div>
        <Link href={'/login'}>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Start Here
        </button>
        </Link>

        <Link href={'/about'}>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Read More
        </button>
        </Link>

      </div>
    </div>
    {/* for line */}
    <div className="bg-white h-1 opacity-10"></div> 

    <div className="text-white container mx-auto p-8 ">
      <h1 className="md:text-3xl text-2xl font-bold text-center ">Your Fans Can buy You A Chai</h1>
      <div className="flex gap-4 justify-around pt-14 md:pt-20 pb-10">

        <div className="item space-y-2 flex flex-col  items-center justify-center  ">
          <img className="rounded-full bg-slate-400 p-4 text-black " src="buy11.png" alt="img" width={80}/>
          <p className="font-bold text-center">Fans Want To Help</p>
          <p className="text-center">Your Fans Are Available For You To Help</p>
        </div>

        <div className="item space-y-2 flex flex-col  items-center justify-center  ">
          <img className="rounded-full bg-slate-400 p-4 text-black " src="coin-flip-47.gif" alt="img" width={80}/>
          <p className="font-bold text-center">Fans Want To Help</p>
          <p className="text-center">Your Fans Are Available For You To Help</p>
        </div>

        <div className="item space-y-2 flex flex-col  items-center justify-center ">
          <img className="rounded-full bg-slate-400 p-4 text-black " src="grp1.jpg" alt="img" width={80}/>
          <p className="font-bold text-center">Fans Want To Help</p>
          <p className="text-center">Your Fans Are Available For You To Help</p>
        </div>

      </div>
    </div>

    {/* for line */}
    <div className="bg-white h-1 opacity-10"></div> 

    <div className="text-white container flex flex-col justify-center items-center gap-16 mx-auto py-8 pb-10">
      <h1 className="text-3xl font-bold text-center">Learn More About Us</h1>
      {/* embedded video from youtube */}
      <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
      <iframe  className="w-full h-full" src="https://www.youtube.com/embed/mBjmq1wlO-c?si=msF8co7Gc29RSlV1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </>
  );
}
