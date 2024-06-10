import { FaCheckCircle } from "react-icons/fa";


const Appreciation = () => {
  return (
    <section className="container-page px-2 my-10">
      <div className="text-center shadow-lg rounded-md p-4 bg-white max-w-lg mx-auto">
        <FaCheckCircle className="text-green-500 text-center block w-full" size={48} />

        <h2 className="my-4 font-bold">¡Thanks for choosing us!</h2>
        <p>¡We appreciate your confidence in us. We hope you can count on us again in the future!</p>
      </div>
    </section>
  );
};

export default Appreciation;
