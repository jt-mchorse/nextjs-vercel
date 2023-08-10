import { Blog } from "@/types";

interface BlogCardProps {
  blog: Blog;
  size?: "xs" | "lg";
}

export default function BlogCard(props: BlogCardProps) {
  const { blog, size = "xs" } = props;
  const isXs = size === "xs";

  return (
    <div className="bg-[#F1F1F1] text-[#282832]">
      <div className="bg-[#D9D9D9] aspect-video">
        <img className="w-full h-full" src={blog.thumbnail} alt="Thumbnail" />
      </div>
      <div className={isXs ? "px-3 py-4" : "px-6 py-14"}>
        <div
          className={`font-medium ${isXs ? "text-xl mb-2" : "text-4xl mb-4"}`}
        >
          {blog.title}
        </div>
        <div className={isXs ? "text-xs" : "text-xl"}>{blog.date}</div>
      </div>
    </div>
  );
}
