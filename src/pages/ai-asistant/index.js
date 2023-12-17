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
          Duygusal sağlığınıza dikkat! AI Therapist ekranında duygu durumunuz
          hakkında konuşabilir, öneriler alabilir ve rahatlatıcı bir dijital
          terapi deneyimi yaşayabilirsiniz. Size özel tasarlanmış bu AI botu,
          duygusal refahınızı desteklemek için burada!
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
