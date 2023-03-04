import { styled } from "@/styles";

const Button = styled("button", {
  background: "$test",
  fontSize: 60,
});

export default function Home() {
  return (
    <>
      <h1>Hello world !</h1>
      <Button>Enviar</Button>
    </>
  );
}
