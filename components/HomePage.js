import Link from "next/link";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col  justify-center items-center h-[100dvh] gap-10">
      <div className="font-bold text-4xl md:text-6xl items-end justify-center flex gap-0">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent ">

        FanFund{" "}
        </span>
        <span className="">
          <img
            src="/tea.gif"
            alt=""
            className="bg-blend-luminosity w-[62px] md:w-[70px] mb-[-7px]"
          />
        </span>
      </div>
      <p className="px-5 text-wrap text-center text-lg font-bold">
        Creators, unleash your potential with fan support. Start now!
      </p>
      <div>
        <Link href="/login"> 
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
            Start Here
          </button>
        </Link>
        <Link href="/about">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
            Read More
          </button>
          </Link>
      </div>
    </div>
    {/* ************************************************************************************************* */}
    <div className="bg-white h-1 opacity-10"></div>
    {/* ************************************************************************************************* */}

    <div className="text-white container mx-auto py-14 px-10 md:px-0">
      <h2 className="text-2xl text-center font-bold mb-14">
      "Your fans can help you create the next big thing!"
      </h2>
      <div className="flex gap-5 justify-around">
        {/* *********************************** */}
        <div className="item space-y-4 flex flex-col items-center text-center">
          <img
            src="/man.gif"
            alt="studying"
            className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
          />
          <p className="text-center font-bold">Fans want to help</p>
          <p>Your fans are available to support you.</p>
        </div>
        {/* *********************************** */}
        <div className="item space-y-4 flex flex-col items-center text-center">
          <img
            src="/dollar.gif"
            alt="dollar"
            className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
            
          />
          <p className="text-center font-bold">Fund want to contribute</p>
          <p>Your fans are willing to contibute financially.</p>
        </div>
        {/* *********************************** */}
        <div className="item space-y-4 flex flex-col items-center text-center">
          <img
            src="/group.gif"
            alt="group"
            className="bg-slate-400 rounded-full w-[82px] md:w-[90px]"
            
          />
          <p className="text-center font-bold">Fans wants to collaborate</p>
          <p>Your fans are ready to collaborate with you.</p>
        </div>
        {/* *********************************** */}
      </div>
    </div>
    {/* ************************************************************************************************* */}
    <div className="bg-white h-1 opacity-10"></div>
    {/* ************************************************************************************************* */}

    <div className="text-white container py-14 mx-auto">
      <h2 className="text-2xl text-center font-bold mb-14">
        About Us
      </h2>
      {/* <div className="flex gap-0 md:gap-5 flex-wrap justify-evenly px-5 md:px-0">
        <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="384" height="216" src="https://www.youtube.com/embed/QtaorVNAwbI?si=iki_wdAwQ3A8GQe7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div> */}
      <div className="px-1 md:px-5 mt-20">
        
       
        <p className="p-4 text-gray-200 text-md text-center font-sans">
        At FanFund, we're committed to empowering developers, creators, and influencers by linking them with their fans. Our platform allows individuals to secure funding for their projects and ideas, fostering a space where creativity and innovation flourish.
        </p>
        <p className="p-4 text-gray-200 text-md text-center font-sans">
          Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you&apos;re a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, FanFund is here to help you achieve your goals.
        </p>
        <p className="p-4 text-gray-200 text-md text-center font-sans">
        We believe in the strength of community and the influence of collective support. Our platform allows patrons to contribute, helping to turn dreams into reality and encouraging a culture of creativity and innovation.
        </p>
      </div>

    </div>
  </>
  )
}

export default HomePage