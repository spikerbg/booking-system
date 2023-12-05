/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../../Components/style/faqlist.module.css"

const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const faqToggle = () => {
    setIsOpen(!isOpen);
  };

  const { question, content } = faq;
  return (
    <>
      <div className="p-3 lg:p-5 mb-5 rounded-[12px] border border-solid border-[#D9DCE2] cursor-pointer">
        <div
          className={styles['div']}
          onClick={faqToggle}
        >
          <h4 className="text-base font-semibold leading-7">
            {question}
          </h4>
          <div>{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </div>

        {isOpen && (
          <div className="mt-2 pr-12">
            <p className="text-base leading-7 text-gray-600">
              {content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqList;
