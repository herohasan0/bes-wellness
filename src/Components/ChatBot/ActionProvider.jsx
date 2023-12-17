import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleBotMessage = (message) => {
    const botMessage = createChatBotMessage(message);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAdviceList = () => {
    const botMessage = createChatBotMessage(
      "Elbette, işte duygusal süreçleri yönetmek için bazı tavsiyeler:",
      {
        widget: "adviceList",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleBotMessage,
            handleAdviceList,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
