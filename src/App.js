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
        <Route path="/step1" element={<StepOne />} />
        {/*<Route path="/home/step2" element={<StepTwo />} />
        <Route path="/home/step3" element={<StepThree />} />
        <Route path="/home/step4" element={<StepFour />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
