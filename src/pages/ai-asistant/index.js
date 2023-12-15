import ActionProvider from "@/Components/ChatBot/ActionProvider";
import MessageParser from "@/Components/ChatBot/MessageParser";
import config from "@/Components/ChatBot/config";
import PageLayout from "@/Components/PageLayout";
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

export default function index() {
  return (
    <PageLayout>
      <div className="">
        <h5 className="text-2xl mb-2 uppercase">AI Asistan</h5>
        <p className="mb-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </PageLayout>
  );
}
