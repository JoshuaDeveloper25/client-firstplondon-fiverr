import cookie from "../../../assets/cookies.gif";

const Cookies = () => {
  return (
    <section className="container-page mt-16">
      <div className="border-yellow-600 border-2 bg-white max-w-[20rem] mx-auto rounded-2xl px-5 py-5">
        <div className="md:block hidden">
          <img className="w-24 mx-auto mb-4" src={cookie} />
          <h3 className="font-bold">We value your Privacy</h3>
        </div>

        <div className="md:hidden flex items-center">
          <img className="w-16 mx-auto" src={cookie} />
          <h3 className="font-bold">We value your Privacy</h3>
        </div>

        <p className="my-4">
          We use cookies to enhance your browsing experience and analyze our
          traffic.{" "}
        </p>

        <p className="text-center">
          By clicking "Accept", you consent to our use of cookies
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <button className="text-gray-800 bg-blue-300 px-2 py-1 rounded">
            Accept All
          </button>
          <button className="text-gray-800 bg-red-300 px-2 py-1 rounded">
            Reject All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cookies;
