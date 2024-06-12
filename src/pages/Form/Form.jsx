// --> Components from page
import Introduction from "./components/Introduction";
import FormSubmit from "./components/FormSubmit";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// 6Lflh_cpAAAAALLYu7xB93rzfBLSH0SHryqgUMXW

const Form = () => {
  const [loading, setIsLoading] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm("service_rkwjlxo", "template_4re3fam", form.current, {
        publicKey: "MpSpXXtqhL_pl5ilL",
      });
      console.log("SUCCESS!");
      setIsLoading(true);
      navigate("/appreciation");
    } catch (error) {
      console.log("FAILED...", error?.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Introduction />

      <FormSubmit
        capVal={capVal}
        setCapVal={setCapVal}
        form={form}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Form;
