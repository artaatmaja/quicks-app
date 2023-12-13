import React, { useCallback, useState } from "react";
import Inbox from "./inbox";
import Chat from "./chat";
import { CHAT_SCREEN, INBOX_SCREEN } from "common/constants/screen";

type Screen = typeof INBOX_SCREEN | typeof CHAT_SCREEN;

const DialogInbox: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(INBOX_SCREEN);

  const handleInbox = useCallback(() => {
    setCurrentScreen(CHAT_SCREEN);
  }, []);

  const onClose = useCallback(() => {
    switch (currentScreen) {
      case CHAT_SCREEN:
        setCurrentScreen(INBOX_SCREEN);
        break;
      default:
        break;
    }
  }, [currentScreen]);

  return (
    <div className="sm:w-[734px] sm:h-[734px] w-[90vw] h-[80vh] bg-white absolute bottom-20 right-0 rounded-lg shadow-xl overflow-y-auto small-scrollbar">
      {currentScreen === INBOX_SCREEN && <Inbox handleInbox={handleInbox} />}
      {currentScreen === CHAT_SCREEN && <Chat onClose={onClose} />}
    </div>
  );
};

export default DialogInbox;
