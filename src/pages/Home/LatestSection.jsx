import React from "react";
import data from "../../data.js";
import SectionTitle from "../../components/SectionTitle";
import LatestBlog from "../../components/LatestBlog";

function LatestSection() {
  return (
    <section className="container mx-auto py-16 px-5">
      <SectionTitle title={"Latest"} />
      <div className="lg:grid lg:grid-cols-3 gap-5">
        {data.latestPosts.map((blog) => (
          <LatestBlog
            title={blog.title}
            content={blog.content}
            date={blog.date}
            image={blog.img}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestSection;
