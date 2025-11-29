import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-white text-2xl md:text-4xl xl:text-5xl font-bold">
        Key <span className="text-cyan-400">Features</span>
      </h1>
      <div className="w-[80%]  sm:w-[40%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-12 gap-10">
        {/* Feature 1 */}
        <div className="w-full relative max-w-60 h-[500px] mx-auto rounded-xl overflow-hidden ">
          <Image
            alt="search feature"
            src="/images/demo_rasaku_search.gif"
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="text-white bg-blue-950 h-[370px] rounded-xl flex flex-col items-center">
          <h1
            className=" mb-2 px-4 py-1 mt-6 rounded-lg bg-gray-500/60 text-white w-fit
                sm:text-lg  font-bold"
          >
            Find Your <span className="text-cyan-500">Favorite </span> Flavor
          </h1>
          <p className="text-sm text-justify p-6">
            Navigating the vast and diverse landscape of Indonesian cuisine has
            never been easier with RASAKU’s intuitive search feature.
            <br /> <br /> No more guessing or endless scrolling; simply type in
            the name of the dish you desire, and let RASAKU guide you directly
            to detailed recipes and cultural insights, ensuring that your
            favorite flavors are always just a quick search away.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="w-full relative max-w-60 h-[500px] mx-auto rounded-xl overflow-hidden ">
          <Image
            alt="search feature"
            src="/images/demo_rasaku_favorite.gif"
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="text-white bg-blue-950 rounded-xl flex flex-col items-center">
          <h1
            className=" mb-2 px-4 py-1 mt-6 rounded-lg bg-gray-500/60 text-white w-fit
                sm:text-lg  font-bold"
          >
            Your <span className="text-cyan-500">Culinary</span> Collection
          </h1>
          <p className="text-[12px] md:text-sm text-justify p-6 ">
            Building your own personalized culinary library has never been
            simpler. With RASAKU’s 'Add to Favorite' feature, you can
            effortlessly curate a collection of the dishes that capture your
            heart. <br /> <br />
            Whether you stumble upon a nostalgic recipe you are eager to cook or
            discover a must-visit local vendor, simply save it to your list for
            instant access later. This feature ensures that your most cherished
            food discoveries are never lost in the shuffle, keeping your top
            tastes organized and ready whenever you are ready to indulge.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="w-full relative max-w-60 mx-auto rounded-xl h-[500px] overflow-hidden ">
          <Image
            alt="search feature"
            src="/images/demo_rasaku_classification.gif"
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="text-white bg-blue-950  rounded-xl flex flex-col items-center">
          <h1
            className=" mb-2 px-4 py-1 mt-6 rounded-lg bg-gray-500/60 text-white w-fit
                sm:text-lg  font-bold"
          >
            Smart <span className="text-cyan-500">Food</span> Recognition
          </h1>
          <p className="text-[12px] md:text-sm text-justify p-6 ">
            Transform your culinary curiosity into instant knowledge with our
            cutting-edge visual recognition technology. Simply snap a photo of
            any traditional Indonesian dish, and let RASAKU serve as your
            personal food historian. In seconds, the app accurately identifies
            the name of the dish, removing the mystery of what is on your plate.
            <br /> <br />
            But we go far beyond a simple label; we invite you to dive deeper
            with rich historical details that reveal the cultural origins and
            stories behind the meal. Finally, we turn inspiration into action by
            providing the authentic recipe, empowering you to take that
            delicious discovery and recreate the magic in your own kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
