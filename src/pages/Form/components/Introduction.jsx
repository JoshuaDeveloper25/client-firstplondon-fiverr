import blueCard from "../../../assets/blue-card.png";

const Introduction = () => {
  return (
    <section className="container-page px-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div>
          <img
            className="w-32"
            src={blueCard}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Order your Free Pay As You Go SIM
          </h2>
          <h4 className="text-base font-bold my-3">6 GB DATA</h4>
          <h4 className="text-base font-bold">
            Unlimited minutes and texts. From Pay as you go to flexible
            contracts.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
