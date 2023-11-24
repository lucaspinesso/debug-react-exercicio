import { useState } from "react";

import MessageForm from "./components/MassageForm/MessageForm";
import { Message } from "./components/Message/Message";
import { AppContainer, MessagesContainer } from "./AppStyled";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const newListMessage = [...messages, message];
    setMessages(newListMessage);
  };

  const deleteMessage = (message) => {
    const filterResult = messages.filter((msg) => msg.id !== message.id);
    setMessages(filterResult);
  };
  const resultMessageMapping = messages.map((message, index) => (
    <Message deleteMessage={deleteMessage} message={message} key={index} />
  ));

  return (
    <AppContainer>
      <GlobalStyle />
      <MessagesContainer>{resultMessageMapping}</MessagesContainer>
      <MessageForm addMessages={addMessage} />
    </AppContainer>
  );
}

export default App;