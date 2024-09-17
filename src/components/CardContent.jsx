import { flexibleContractPlan, monthlyPlan, payAsYouGoPlan } from "../../data";
import { PiQuestionLight } from "react-icons/pi";
import img from "../assets/get-sim-home.svg";
import { useState } from "react";
import Modal from "./Modal";

const CardContent = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      {isOpen === 1 && (
        <>
          <Modal
            setIsOpen={setIsOpen}
            title={item?.planOne}
            description={item?.modalDescriptionPlanOne}
          />
        </>
      )}

      {isOpen === 2 && (
        <>
          <Modal
            setIsOpen={setIsOpen}
            title={item?.planTwo}
            description={item?.modalDescriptionPlanTwo}
          />
        </>
      )}

      {isOpen === 3 && (
        <>
          <Modal
            setIsOpen={setIsOpen}
            title={item?.planThree}
            description={item?.modalDescriptionPlanThree}
          />
        </>
      )}

      <div>
        <h2 className="text-center text-lg font-semibold">
          (#{index + 1}) {item?.title}
        </h2>

        <ul className="mt-4">
          <li className="flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>{item?.planOne}</span>

            <span className="inline-flex items-center gap-2">
              {item?.sizePlan1}{" "}
              <button onClick={() => setIsOpen(1)}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
          <li className="my-5 flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>{item?.planTwo}</span>

            <span className="inline-flex items-center gap-2">
              {item?.sizePlan2}{" "}
              <button onClick={() => setIsOpen(2)}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
          <li className="flex justify-between border-2 border-dashed rounded-lg px-2 py-1 gap-2">
            <span>{item?.planThree}</span>

            <span className="inline-flex items-center gap-2">
              {item?.sizePlan3}{" "}
              <button onClick={() => setIsOpen(3)}>
                <PiQuestionLight className="text-xl" />
              </button>
            </span>
          </li>
        </ul>

        <div className="mt-5 text-center">
          <button className="bg-[#FEF2CC] text-grayDark px-3 py-2 rounded-lg relative">
            Order your free SIM
            <img src={img} alt="" className="absolute h-10 -top-4 -right-12" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContent;
