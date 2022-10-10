import style from "./stepThree.module.css";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

export const StepThree = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="description">
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className={style.content}>
        <main className={style.main}>
          <div className={style.usageType}>
            <BsFillPersonFill />
            <br />
            <strong>For myself</strong>
            <br />
            <span className={style.typeDescription}>
              Write better. Think more clearly. Stay organized.
            </span>
          </div>
          <div className={style.usageType}>
            <IoIosPeople />
            <br />
            <strong>With my team</strong>
            <br />
            <span className={style.typeDescription}>
              Wikis, docs, tasks & projects, all in one place.
            </span>
          </div>
        </main>
        <button>Create Workspace</button>
      </div>
    </>
  );
};
