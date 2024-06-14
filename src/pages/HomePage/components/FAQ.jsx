import AccordionAlt from "../../../components/AccordionAlt";
import faq from "../../../assets/faq.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const faq5 = [
  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 1,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 2,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 3,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 4,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 5,
  },
];

const faq10 = [
  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 6,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 7,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 8,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 9,
  },

  {
    title: "What is included in TalkTalk plans?",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cupiditate amet commodi ipsa nam, praesentium`,
    id: 10,
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(0);

  const handleToggle = (key) => {
    if (key === isOpen) return setIsOpen(0);
    setIsOpen(key);
  };

  return (
    <section className="container-page md:px-0 px-2 mt-24">
      <div className="text-center">
        <Link to={"#"} className="section-button">
          FAQ
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row mt-8">
        <div className="flex-1">
          <img src={faq} loading="lazy" decoding="async" />
        </div>

        <div className="self-center flex-1 md:ps-5 ps-0">
          <h3 className="font-bold text-3xl text-center text-[#8940D8]">
            For quick answers to your Talktalk questions, please consult our
            FAQs for solutions to common enquiries.
          </h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-6 mt-8">
        <div className="flex-1">
          {faq5?.map((item, idx) => (
            <AccordionAlt
              key={idx}
              title={item?.title}
              content={item?.paragraph}
              handleToggle={handleToggle}
              id={item?.id}
              isOpen={isOpen}
            />
          ))}
        </div>

        <div className="flex-1">
          {faq10?.map((item, idx) => (
            <AccordionAlt
              key={idx}
              title={item?.title}
              content={item?.paragraph}
              handleToggle={handleToggle}
              id={item?.id}
              isOpen={isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
