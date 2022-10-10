import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  ProgressIndicator,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
} from "./components/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProgressIndicator />}>
        <Route path="/" element={<StepOne />} />
        <Route path="/step2" element={<StepTwo />} />
        <Route path="/step3" element={<StepThree />} />
        {/*<Route path="/home/step4" element={<StepFour />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
