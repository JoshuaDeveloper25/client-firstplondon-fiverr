import AccordionAlt from "../../../components/AccordionAlt";
import faq from "../../../assets/faq.png";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <section className="container-page md:px-0 px-2">
        <div className="text-center">
          <Link to={"#"} className="section-button">
            FAQ
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:flex-row mt-8">
          <div className="flex-1">
            <img src={faq} loading="lazy" decoding="async" />
          </div>

          <div className="self-end flex-1">
            <h3 className="font-bold text-3xl text-purple-900">
              For quick answers to your Talktalk questions, please consult our
              FAQs for solutions to common enquiries.
            </h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6 mt-8">
          <div className="flex-1">
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
          </div>

          <div className="flex-1">
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
            <AccordionAlt title={"What is included in TalkTalk plans?"} />
          </div>
        </div>
      </section>
  )
}

export default FAQ