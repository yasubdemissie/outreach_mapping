import styled from "styled-components";
import Map from "../pages/Map";
import Form from "./Form";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const FlexItem = styled.div`
  flex: ${(props) => props.flex};
`;

function AppLayout() {
  const [isVisible, setIsVisible] = useState(true);

  function onOpen() {
    setIsVisible(true);
  }
  return (
    <Container>
      <FlexItem flex="0.3">
        <Form isVisible={isVisible} onToggle={setIsVisible} />
      </FlexItem>
      <FlexItem flex="0.7">
        <Map onOpen={onOpen} />
      </FlexItem>
    </Container>
  );
}

export default AppLayout;