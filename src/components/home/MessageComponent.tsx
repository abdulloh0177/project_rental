import React from "react";
import CategoryCarusel from "../ui/CategoryCarusel";
import MessageCarusel from "../ui/MessageCarusel";

const MessageComponent = ({title,description}:{title:string,description:string}) => {
  return (
    <div className="bg-[#F5F7FC]">
      <div className=" py-[48px]">
        <div data-aos="zoom-in-up">
          <h2 className="text-[#0D263B] font-[600] text-center text-[28px]">
            {title}
          </h2>
          <p className="text-[#696969] max-sm:mx-[20px] mt-2 text-center text-sm">
            {description}
          </p>
        </div>
        <div className="mt-[32px]">
          <MessageCarusel />
        </div>
      </div>
    </div>
  );
};
export default MessageComponent;
