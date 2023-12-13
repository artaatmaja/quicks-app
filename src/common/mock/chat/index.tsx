import { v4 as uuidv4 } from "uuid";

import DotGray from "assets/icons/dotgray.svg";

const MockChat = () => {
  return (
    <>
      <div
        key={`message-${uuidv4()}`}
        className="max-w-[70%] ml-auto space-y-1 pr-2 flex flex-col items-end"
      >
        <p className="text-right text-chat2-text font-semibold">You</p>
        <div className="flex items-start gap-2">
          <button className="flex-[0_0_16px]">
            <img src={DotGray} alt="more" />
          </button>
          <div className="p-3 rounded-lg flex flex-col gap-2 bg-chat2-bg">
            <span>
              No worries. It will be completed ASAP. I've asked him yesterday.
            </span>
            <span className="text-primary-bg2">19:32</span>
          </div>
        </div>
      </div>

      <div className="relative text-center">
        <p className="bg-white m-auto z-10 relative inline-block whitespace-nowrap px-6 font-bold">
          Today June 09, 2021
        </p>
        <div className="w-full h-[1px] bg-primary-bg absolute top-0 bottom-0 m-auto"></div>
      </div>

      <div
        key={`message-${uuidv4()}`}
        className="max-w-[70%] mr-auto space-y-1 pr-2 flex flex-col items-start"
      >
        <p className="text-right text-chat1-text font-semibold">Mary Hilda</p>
        <div className="flex flex-row-reverse items-start gap-2 justify-end">
          <button className="flex-[0_0_16px]">
            <img src={DotGray} alt="more" />
          </button>
          <div className="p-3 rounded-lg flex flex-col gap-2 bg-chat1-bg">
            <span>
              Hello Obaidullah, I will be your case advisor for case #029290. I
              have assigned some homework for you to fill. Please keep up with
              the due dates. Should you have any questions, you can message me
              anytime. Thanks.
            </span>
            <span className="text-primary-bg2">19:32</span>
          </div>
        </div>
      </div>

      <div
        key={`message-${uuidv4()}`}
        className="max-w-[70%] ml-auto space-y-1 pr-2 flex flex-col items-end"
      >
        <p className="text-right text-chat2-text font-semibold">You</p>
        <div className="flex items-start gap-2">
          <button className="flex-[0_0_16px]">
            <img src={DotGray} alt="more" />
          </button>
          <div className="p-3 rounded-lg flex flex-col gap-2 bg-chat2-bg">
            <span>
              Please contact Mary for questions regarding the case bcs she will
              be managing your forms from now on! Thanks Mary.
            </span>
            <span className="text-primary-bg2">19:32</span>
          </div>
        </div>
      </div>

      <div
        key={`message-${uuidv4()}`}
        className="max-w-[70%] mr-auto space-y-1 pr-2 flex flex-col items-start"
      >
        <p className="text-right text-chat1-text font-semibold">Mary Hilda</p>
        <div className="flex flex-row-reverse items-start gap-2 justify-end">
          <button className="flex-[0_0_16px]">
            <img src={DotGray} alt="more" />
          </button>
          <div className="p-3 rounded-lg flex flex-col gap-2 bg-chat1-bg">
            <span>Sure thing, Claren</span>
            <span className="text-primary-bg2">19:32</span>
          </div>
        </div>
      </div>

      <div className="relative text-center">
        <p className="bg-white m-auto z-10 relative inline-block whitespace-nowrap px-6 font-bold text-warning-red">
          New Message
        </p>
        <div className="w-full h-[1px] bg-warning-red absolute top-0 bottom-0 m-auto"></div>
      </div>

      <div
        key={`message-${uuidv4()}`}
        className="max-w-[70%] mr-auto space-y-1 pr-2 flex flex-col items-start"
      >
        <p className="text-right text-chat3-text font-semibold">
          Obaidullah Amarkhil
        </p>
        <div className="flex flex-row-reverse items-start gap-2 justify-end">
          <button className="flex-[0_0_16px]">
            <img src={DotGray} alt="more" />
          </button>
          <div className="p-3 rounded-lg flex flex-col gap-2 bg-chat3-bg">
            <span>Morning, I'll try to do them. Thanks</span>
            <span className="text-primary-bg2">19:32</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockChat;
