import style from "./stepOne.module.css";
import { useNavigate } from "react-router-dom";

export const StepOne = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="description">
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later</p>
      </div>

      <form onSubmit={() => navigate("/step2")}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" placeholder="Steve Jobs" id="fullName" />
        </div>
        <div>
          <label htmlFor="fullName">Display Name</label>
          <input type="text" placeholder="Steve" id="fullName" />
        </div>

        <button>Create Workspace</button>
      </form>
    </>
  );
};
