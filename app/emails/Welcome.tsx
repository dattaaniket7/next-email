import React from "react";
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Head,
} from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Img
          className="mx-auto w-24"
          src="https://avatars.githubusercontent.com/u/52018449?v=4"
        ></Img>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg text-center">
            <Heading className="text-xl pt-4"> Hello there 👋</Heading>
            <Text className="text-lg font-medium text-gray-700">
              Laborum officia in eiusmod velit amet nulla id. Nostrud consequat
              aliqua ex adipisicing deserunt deserunt duis et nisi elit ut
              tempor amet. Nulla tempor est qui esse enim officia ipsum enim
              elit elit officia consectetur ea aute. Aliquip eu in ullamco nulla
              deserunt. Nostrud dolore adipisicing dolore proident laboris. Ex
              ullamco elit excepteur labore laborum consectetur anim sit.
              Adipisicing veniam ex elit ad et officia anim pariatur et dolore
              non.
            </Text>
            <Button
              href="https://github.com/dattaaniket7"
              className="bg-purple-700 text-white font-bold px-4 py-6 rounded-md"
            >
              Check out
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
