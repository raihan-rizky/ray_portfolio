import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="pb-16 pt-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Latest <span className="text-cyan-400">Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div data-aos="fade-up">
          <BlogCard
            hyperlink="https://www.linkedin.com/pulse/thriving-uncertainty-my-journey-adaptability-bangkit-rizki-dwiputra/?trackingId=0oQ%2BxZvXNeore4%2F2gb5xHA%3D%3D"
            image="/images/adaptability-blog.png"
            date="12 October 2023"
            title="Thriving in Uncertainty : My Journey to Adaptability in Bangkit 2023"
            keywords={["Growth Mindset", "Adaptability", "Journey"]}
          />
        </div>
        {/*
        <div data-aos="fade-up" data-aos-delay="200">
          {" "}
          <BlogCard
            image="/images/b2.jpg"
            date="6 July 2023"
            title="Learn How to Build an Amazing Social Media Website Using Next JS"
            keywords={[
              "Instagram",
              "Next.js",
              "Facebook",
              "Twitter",
              "Threads",
            ]}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          {" "}
          <BlogCard
            image="/images/b3.jpg"
            date="6 July 2023"
            title="Learn How to Build an Amazing Game Website Using Next JS"
            keywords={["Videogame", "Javascript", "Node", "React"]}
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default Blog;
