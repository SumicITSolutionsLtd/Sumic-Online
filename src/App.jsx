import React from "react";
import Routes from "./Routes";
import DevelopmentBanner from "./components/ui/DevelopmentBanner";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./components/ui/mega_menu.css"

function App() {
  return (
    <>
      <Routes />
      <DevelopmentBanner />
      <ScrollToTopButton />
    </>
  );
}

export default App;
