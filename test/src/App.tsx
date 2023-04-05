import { Component, createSignal } from 'solid-js';

import Picker from "@uwu/tz-picker";

const App: Component = () => {
  const [active, setActive] = createSignal<string>();

  return (
    <>
      <h1>Tz Picker test - you have picked {active()}</h1>
      <Picker active={active()} onChoose={setActive} />
    </>
  );
};

export default App;
