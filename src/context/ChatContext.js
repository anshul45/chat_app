import { onChatStateChanged } from "firebase/Chat";
import { createContext, useEffect, useState } from "react";
import { Chat } from "../firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  );
};
