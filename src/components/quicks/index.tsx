import React, { useEffect, useState } from "react";
import clsx from "clsx";

import QuicksInit from "assets/icons/quicks-init.svg";
import QuicksTask from "assets/icons/quicks-task.svg";
import QuicksTaskOpened from "assets/icons/quicks-task-opened.svg";
import QuicksInbox from "assets/icons/quicks-inbox.svg";
import QuicksInboxOpened from "assets/icons/quicks-inbox-opened.svg";
import DialogInbox from "./dialogInbox";
import DialogTask from "./dialogTask";

const Quicks: React.FC = () => {
  const [quicksIsOpen, setQuickIsOpen] = useState<boolean>(false);
  const [inboxIsOpen, setInboxIsOpen] = useState<boolean>(false);
  const [taskIsOpen, setTaskIsOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState("");

  const toggleQuicks = () => {
    if (quicksIsOpen) {
      setAnimationClass("animate-slideOut");
      return;
    }
    setAnimationClass("animate-slideIn");
    setQuickIsOpen(true);
  };

  const handleInboxClick = () => {
    setInboxIsOpen(!inboxIsOpen);
    setTaskIsOpen(false);
  };

  const handleTaskClick = () => {
    setTaskIsOpen(!taskIsOpen);
    setInboxIsOpen(false);
  };

  useEffect(() => {
    if (animationClass === "animate-slideOut") {
      const timer = setTimeout(() => {
        setQuickIsOpen(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  return (
    <>
      {inboxIsOpen && <DialogInbox />}
      {taskIsOpen && <DialogTask />}
      {quicksIsOpen && (
        <div
          className={clsx(
            "flex gap-4 items-end justify-center",
            taskIsOpen ? "flex-row-reverse" : "flex-row"
          )}
        >
          <button
            onClick={handleTaskClick}
            className={clsx("space-y-2", animationClass)}
          >
            {!taskIsOpen && <span className="text-white">Task</span>}
            <img
              src={taskIsOpen ? QuicksTaskOpened : QuicksTask}
              width={68}
              alt="Task"
              className={clsx(
                "hover-animation",
                taskIsOpen ? "h-[75px]" : "h-[68px]"
              )}
            />
          </button>
          <button
            onClick={handleInboxClick}
            className={clsx("space-y-2", animationClass)}
          >
            {!inboxIsOpen && <span className="text-white">Inbox</span>}
            <img
              src={inboxIsOpen ? QuicksInboxOpened : QuicksInbox}
              width={68}
              alt="Inbox"
              className={clsx(
                "hover-animation",
                inboxIsOpen ? "h-[75px]" : "h-[68px]"
              )}
            />
          </button>
        </div>
      )}
      {!inboxIsOpen && !taskIsOpen && (
        <button onClick={toggleQuicks} className="z-10 hover-animation">
          <img src={QuicksInit} width={68} height={68} alt="Quick" />
        </button>
      )}
    </>
  );
};

export default Quicks;
