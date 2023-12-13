import React, { useState } from "react";
import clsx from "clsx";

import ExpandIcon from "assets/icons/expand-arrow.svg";
import MoreDot from "assets/icons/more-dot.svg";
import ClockBlue from "assets/icons/clock-blue.svg";
import PenBlue from "assets/icons/pen-blue.svg";
import taskData from "common/mock/data/taskData.json";
import { calculateDaysLeft, formatDate } from "utils/helpers/date";

const DialogTask = () => {
  const initialAccordionStates = taskData.reduce<Record<string, boolean>>(
    (acc, item) => {
      acc[item.id] = item.isOpen;
      return acc;
    },
    {}
  );
  const [openAccordions, setOpenAccordions] = useState(initialAccordionStates);

  const initialIsDoneStatus = taskData.reduce<Record<string, boolean>>(
    (acc, item) => {
      acc[item.id] = item.isDone;
      return acc;
    },
    {}
  );

  const [isDoneStatus, setIsDoneStatus] = useState(initialIsDoneStatus);

  const toggleAccordion = (itemId: string) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const toggleIsDone = (itemId: string) => {
    setIsDoneStatus((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="sm:w-[734px] sm:h-[734px] w-[90vw] h-[80vh] bg-white absolute bottom-20 right-0 rounded-lg shadow-xl overflow-y-auto small-scrollbar p-6">
      <div className="flex justify-between">
        <div className="border border-primary-bg flex items-center p-2 rounded-lg">
          <select name="task_category" id="taskCategory">
            <option value="my_task">May Task</option>
            <option value="personal_errands">Personal Errands</option>
            <option value="urgent_to_do">Urgent To-Do</option>
          </select>
        </div>
        <div>
          <button className="bg-primary h-10 w-[100px] text-white rounded-lg hover-animation">
            New Task
          </button>
        </div>
      </div>

      {taskData.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-4 flex items-start gap-4 w-full border-b border-primary-bg pb-4"
          >
            <input
              type="checkbox"
              checked={isDoneStatus[item.id]}
              onChange={() => toggleIsDone(item.id)}
              className="mt-[6px]"
            />
            <div className="w-full">
              <div
                className="flex justify-between cursor-pointer w-full"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex gap-4 max-w-[350px]">
                  <span
                    className={clsx("font-bold", {
                      "text-gray-300 line-through": isDoneStatus[item.id],
                    })}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-warning-red">
                    {calculateDaysLeft(item.date)}
                  </p>
                  <p>{formatDate(item.date)}</p>
                  <img
                    src={ExpandIcon}
                    alt="collapse"
                    className={clsx("cursor-pointer", {
                      "rotate-180": !openAccordions[item.id],
                    })}
                  />
                  <img src={MoreDot} alt="more" className="cursor-pointer" />
                </div>
              </div>

              {/* Collapse Content */}
              {openAccordions[item.id] && (
                <div className="space-y-3 mt-4">
                  <div className="flex gap-4 items-center">
                    <img src={ClockBlue} alt="date" />
                    <div className="border border-primary-bg rounded-lg overflow-hidden p-2">
                      <input
                        type="date"
                        className="focus:outline-none"
                        defaultValue={new Date(item.date)
                          .toISOString()
                          .substring(0, 10)}
                        min={new Date().toISOString().substring(0, 10)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <img src={PenBlue} alt="description" />
                    <p>
                      {item.description ? item.description : "No Description"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DialogTask;
