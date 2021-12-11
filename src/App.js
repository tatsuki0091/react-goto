import "./App.css";

// import ChallengeA from './challenges/challengeA/ChallengeA'
// import ChallengeB from './challenges/challengeB/ChallengeB'
// import ChallengeC from './challenges/challengeC/ChallengeC'
// import ChallengeD from './challenges/challengeD/ChallengeD'
import ContextA from "./context/ContextA";
import { createContext, useState } from "react";

export const Context = createContext();

function App() {
  const [contextTest, setContextTest] = useState("test");
  return (
    <div className="App">
      {/* <ChallengeA />   */}
      {/* <ChallengeB />   */}
      {/* <ChallengeC />   */}
      <Context.Provider value={{ contextTest, setContextTest }}>
        <ContextA />
      </Context.Provider>
    </div>
  );
}

export default App;
