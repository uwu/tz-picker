import { Component, createSignal } from 'solid-js';

import Picker from "@uwu/tz-picker";

const App: Component = () => {
  const [active, setActive] = createSignal<string>();

  return (
    <div style="background: black; color: white">
      <h1>Tz Picker test - you have picked {active()}</h1>
      <Picker
        active={active()}
        onChoose={setActive}
        col="#F00"
        colHov="#0F0"
        colActive="#00F"
      />
    </div>
  );
};

export default App;
