import circleCheck from "../assets/check-circle.png";
import circleCheck2 from "../assets/check-circle-error.png";

const IncludedFeatures = ({ children, className, errorImage }) => {
  return (
    <div className={`flex gap-2 items-start ${className}`}>
      <div className="flex-1">
        <img
          className="w-6"
          src={errorImage ? circleCheck2 : circleCheck}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex-[80%]">
        <h3 className="text-sm">{children}</h3>
      </div>
    </div>
  );
};

export default IncludedFeatures;
