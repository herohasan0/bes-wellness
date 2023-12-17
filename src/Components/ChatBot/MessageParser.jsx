import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes("kaygılı".toLowerCase())) {
      return actions.handleBotMessage(
        "Anladım, kaygı hissetmek zorlayıcı olabilir. Bu duyguyu daha iyi anlamam için, kaygıya neden olan şeyler hakkında biraz daha bilgi verebilir misin?"
      );
    }

    if (message.toLowerCase().includes("patronum".toLowerCase())) {
      return actions.handleBotMessage(
        "Anladığım kadarıyla patronunla yaşadığın zorluklar seni yoruyor. Bu durum oldukça zorlayıcı olabilir. İş yerindeki stres ve baskılar bazen duygusal ve fiziksel olarak yorulmamıza neden olabilir. Bu konuda sana destek olmak için buradayım. Ne tür bir destek arıyorsun?"
      );
    }

    if (message.toLowerCase().includes("nasıl".toLowerCase())) {
      return actions.handleAdviceList();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
