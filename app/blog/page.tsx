import BlogCard from "@/components/blog/blog-card/BlogCard";
import BlogFilters from "@/components/blog/blog-filters/BlogFilters";
import { Blog } from "@/types";

export default function BlogLanding() {
  const title = "Blog Section Title";
  const blog: Blog = {
    title: "Blog Post Title Inserted Here",
    date: "Tuesday, March 18, 2009",
    content: "",
    thumbnail: "",
    slug: "1",
  };
  const allArticles = new Array(18).fill(blog);
  const latestArticles = allArticles.slice(0, 6); // Assuming allArticles is sorted by date
  const recommendedArticles = new Array(6).fill(blog);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="h-96 flex flex-col justify-end py-10">
        <div className="container mx-auto">
          <h1 className="text-6xl font-light">{title}</h1>
        </div>
      </section>
      <section className="pt-12 pb-44 bg-[#F6F4F0]">
        <div className="container mx-auto">
          <BlogFilters />

          <div className="mb-20">
            <h2 className="text-[#282832] text-5xl font-bold mb-10">
              The Latest
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <BlogCard blog={latestArticles[0]} size="lg" />
              </div>
              <div className="grid grid-cols-1 gap-8">
                <BlogCard blog={latestArticles[1]} />
                <BlogCard blog={latestArticles[2]} />
              </div>
              <BlogCard blog={latestArticles[3]} />
              <BlogCard blog={latestArticles[4]} />
              <BlogCard blog={latestArticles[5]} />
            </div>
          B</div>

          <div className="mb-20">
            <h2 className="text-[#282832] text-5xl font-bold mb-10">
              Recommended
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {recommendedArticles.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-[#282832] text-5xl font-bold mb-10">
              All Articles
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {allArticles.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
