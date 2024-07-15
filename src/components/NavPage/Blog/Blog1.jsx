import React from "react";
import BannerSection from "../../BannerSection";
import BreadImg from "../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import BlogCard from "../../BlogCard";
import BlogBg from "../../../../src/assets/img/blog/bg-1.jpg";
import BlogI from "../../../../src/assets/img/blog/blog-1-1.jpg";
import Blog2 from "../../../../src/assets/img/blog/blog-1-2.jpg";
import Blog3 from "../../../../src/assets/img/blog/blog-1-3.jpg";
import Subscribe from "../../Body/Subscribe"

const Blog1 = () => {
  return (
    <>
      <BannerSection img={BreadImg} title="Blog 1" name="Blog 1" />
      <div className="row">
      <BlogCard bg={BlogBg} Blog1={BlogI} />
      <BlogCard bg={BlogBg} Blog1={Blog2} />
      <BlogCard bg={BlogBg} Blog1={Blog3} />
      <BlogCard bg={BlogBg} Blog1={BlogI} />
      <BlogCard bg={BlogBg} Blog1={Blog2} />
      <BlogCard bg={BlogBg} Blog1={Blog3} />
      </div>
      <Subscribe/>
    </>
  );
};

export default Blog1;
