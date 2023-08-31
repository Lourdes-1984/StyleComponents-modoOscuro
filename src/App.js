import React, { useState } from "react";
import GlobalStyled from "./GlobalStyled";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/themas";
import { BtnTema } from "./Components/UI";
import SwicherThema from "./Components/SwicherThema";
console.log(temaClaro, temaOscuro);
function App() {
  const [tema, setTema] = useState(true);

  const handleTema = () => {
    setTema((tema) => !tema);
    console.log("clic");
  };

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
        <GlobalStyled />
        <BtnTema onClick={handleTema}>
          <SwicherThema tema={tema} />
        </BtnTema>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
