import blogImage from "../../../assets/blog-image.jpg";

const Introduction = () => {
  return (
    <section className="container-page mt-16 px-2">
      <div className="flex flex-col-reverse sm:flex-row gap-8">
        <article className="flex-1 text-secondary-color">
          <h3 className="text-zinc-800 font-bold text-center text-3xl">
            What is the default PIN Code for my Talktalk SIM?
          </h3>
          <div className="bg-gray-700 my-5 w-full block h-1 rounded"></div>
          <h4>Article written on April 4, 2024</h4>
        </article>

        <article className="flex-1 mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={blogImage}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default Introduction;
