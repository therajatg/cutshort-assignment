import style from "./stepTwo.module.css";
import { useNavigate } from "react-router-dom";

export const StepTwo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="description">
        <h1>Let's set up a home for all your work</h1>
        <p>You can always create another workspace later.</p>
      </div>

      <form onSubmit={() => navigate("/step3")}>
        <div>
          <label htmlFor="fullName">Workspace Name</label>
          <input type="text" placeholder="Eden" id="fullName" required />
        </div>
        <div>
          <label htmlFor="fullName">
            Workspace URL <span className={style.optional}>(optional)</span>
          </label>
          <input type="text" placeholder="Example" id="fullName" />
        </div>

        <button>Create Workspace</button>
      </form>
    </>
  );
};
