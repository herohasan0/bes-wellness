import PageLayout from "@/Components/PageLayout";
import React from "react";
import ChatBot from "react-simple-chatbot";

export default function index() {
  return (
    <PageLayout>
      <div className="">
        <h5 className="text-2xl mb-4 uppercase">TAHLİLLERİM</h5>
        <ChatBot
          steps={[
            {
              id: "hello-world",
              message: "Hello World!",
              end: true,
            },
          ]}
        />
      </div>
    </PageLayout>
  );
}
