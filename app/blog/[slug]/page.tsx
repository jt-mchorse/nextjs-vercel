import TextInput from "@/components/text-input/TextInput";

export default function Blog() {
  const keywords = [
    "digital marketing",
    "marketing data management",
    "data analytics in marketing",
    "content keywords",
    "data analytics in marketing",
    "content keywords",
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col pt-24 pb-10">
        <div className="container mx-auto">
          <div className="w-full md:w-1/2 mb-12">
            <div className="mb-10">Tuesday, March 18, 2023</div>
            <h1 className="text-6xl font-light mb-6">
              Blog Post Title is Inserted Here
            </h1>
            <div>by Optional Byline Field</div>
          </div>
          <div className="w-full md:w-2/3">
            {keywords.map((keyword) => (
              <span key={keyword} className="uppercase underline mr-6 mb-6">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white pt-12 pb-44">
        <div className="container mx-auto"></div>
      </section>
    </main>
  );
}
