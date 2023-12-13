import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import clsx from "clsx";

import DotGray from "assets/icons/dotgray.svg";
import BackArrow from "assets/icons/back-arrow.svg";
import CloseIcon from "assets/icons/close.svg";
import TypingGif from "assets/icons/typing.gif";
import MockChat from "common/mock/chat";
import { getCurrentTimeFormatted } from "utils/helpers/date";

type ChatProps = {
  onClose: () => void;
};

interface Message {
  id: number;
  message?: string;
  userId?: number;
  userName?: string;
  isSelf: boolean;
  loading: boolean;
}

const Chat: React.FC<ChatProps> = ({ onClose }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNewMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const tempMessageId = Date.now();
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: tempMessageId, isSelf: true, message: newMessage, loading: false },
      { id: tempMessageId + 1, isSelf: false, loading: true }, // Temporary loading message
    ]);

    setNewMessage("");

    try {
      const response = await axios.get("https://dummyapi.io/data/v1/comment", {
        headers: { "app-id": "6576bf59b1f7d0629a8191ff" },
      });

      const comments = response.data.data;
      const randomComment =
        comments[Math.floor(Math.random() * comments.length)];

      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === tempMessageId + 1
            ? {
                ...randomComment,
                id: randomComment.id,
                message: randomComment.message,
                userId: randomComment.owner.id,
                userName: randomComment.owner.firstName,
                isSelf: false,
                loading: false,
              }
            : msg
        )
      );
    } catch (error) {
      console.error("Error fetching post:", error);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== tempMessageId + 1)
      );
    }

    scrollToBottom();
  };

  return (
    <>
      <div className="border-b p-6 flex gap-6 items-center justify-between">
        <div className="flex gap-6 items-center">
          <button onClick={onClose}>
            <img src={BackArrow} alt="back" />
          </button>
          <div>
            <p className="text-primary text-bold">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </p>
            <p>3 Participants</p>
          </div>
        </div>
        <button onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </button>
      </div>
      <div
        className="overflow-auto h-[calc(100%-170px)] small-scrollbar px-4 scroll-smooth"
        ref={chatContainerRef}
      >
        <div className="space-y-2">
          <MockChat />
          {messages.map((message) =>
            message.loading ? (
              <div key={message.id}>
                <img src={TypingGif} width={64} height={64} alt="typing" />
              </div>
            ) : (
              <div
                key={`message-${uuidv4()}`}
                className={clsx(
                  "max-w-[70%] space-y-1 pr-2 flex flex-col",
                  message.isSelf ? "ml-auto items-end" : "mr-auto items-start"
                )}
              >
                <p
                  className={clsx(
                    "text-right  font-semibold",
                    message.isSelf ? "text-chat2-text" : "text-chat3-text"
                  )}
                >
                  {message.isSelf ? "You" : message.userName}
                </p>
                <div
                  className={clsx(
                    "flex items-start gap-2 justify-end",
                    message.isSelf ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <button className="flex-[0_0_16px]">
                    <img src={DotGray} alt="more" />
                  </button>
                  <div
                    className={clsx(
                      "p-3 rounded-lg flex flex-col gap-2 ",
                      message.isSelf ? "bg-chat2-bg" : "bg-chat3-bg"
                    )}
                  >
                    <span>{message.message}</span>
                    <span className="text-primary-bg2">
                      {getCurrentTimeFormatted()}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full flex absolute bottom-0 p-4 bg-white gap-3">
        <div className="border border-primary-bg2 rounded-lg flex-1 h-10 bg-white px-4">
          <input
            type="text"
            value={newMessage}
            onChange={handleNewMessageChange}
            className="w-full h-full focus:outline-none"
            placeholder="Type a new message"
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="h-10 bg-primary text-white rounded-md basis-[76px] hover-animation"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;
