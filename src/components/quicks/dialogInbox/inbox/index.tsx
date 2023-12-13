import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SearchIcon from "assets/icons/search.svg";
import AvatarBlue from "assets/icons/avatar-blue.svg";
import AvatarGray from "assets/icons/avatar-gray.svg";
import NotifDot from "assets/icons/notif-dot.svg";
import { INBOX_DATA } from "common/constants/inbox";
import clsx from "clsx";

type InboxProps = {
  handleInbox: () => void;
};

const Inbox: React.FC<InboxProps> = ({ handleInbox }) => {
  const [searchTerms, setSearchTerms] = useState<string>("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerms(e.target.value.toLowerCase());
  };

  const filteredData = INBOX_DATA.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerms) ||
      item.name.toLowerCase().includes(searchTerms) ||
      item.message.toLowerCase().includes(searchTerms)
  );

  return (
    <div className="py-5 px-7">
      <div className="border border-primary-bg2 rounded-lg px-4 flex justify-between h-8 mb-7">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 focus:outline-none"
          onChange={handleSearch}
        />
        <img src={SearchIcon} width={12} height={12} alt="search icon" />
      </div>
      {filteredData.map((item) => {
        return (
          <div
            key={`inbox-${uuidv4()}`}
            className="flex flex-col sm:flex-row justify-between border-b border-primary-bg2 pb-7 gap-4 hover:shadow-lg hover:bg-gray-100 cursor-pointer py-2 sm:p-4 transition duration-300 ease-in-out last:border-none"
            onClick={handleInbox}
          >
            <div className="flex flex-1 justify-start gap-4">
              <div
                className={clsx(
                  "flex flex-[0_0_51px] items-start flex-row-reverse pt-1",
                  item.groupChat ? "justify-end" : "justify-start"
                )}
              >
                <img
                  src={AvatarBlue}
                  alt="Avatar"
                  width={34}
                  height={34}
                  className="-ml-4 flex-[0_0_34px]"
                />
                {item.groupChat && (
                  <img
                    src={AvatarGray}
                    alt="Avatar"
                    width={34}
                    height={34}
                    className="flex-[0_0_34px]"
                  />
                )}
              </div>
              <div>
                <p className="text-primary">{item.title}</p>
                <p className="font-semibold text-sm leading-5">{item.name} :</p>
                <p className="text-sm leading-none">{item.message}</p>
              </div>
            </div>
            <div className="space-y-4 sm:flex-[0_0_160px] text-right">
              <p>{item.date}</p>
              {!item.opened && (
                <img src={NotifDot} alt="notification" className="ml-auto" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Inbox;
