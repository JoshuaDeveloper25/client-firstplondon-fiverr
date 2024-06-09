import Introduction from "./components/Introduction";
import BlogPost from "./components/BlogPost";

const Blog = () => {
  return (
    <>
      {/* -- Introduction START -- */}
      <Introduction />

      {/* -- In this article START -- */}
      <BlogPost />
    </>
  );
};

export default Blog;
