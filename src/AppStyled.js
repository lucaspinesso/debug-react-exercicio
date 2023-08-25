import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 600px;
  height: 90vh;
  border-radius: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  background: url("https://i.pinimg.com/236x/39/e7/74/39e774d1313eae280b1838910419f456.jpg");
`;

export const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  position: sticky;
  bottom: 0;
`;
