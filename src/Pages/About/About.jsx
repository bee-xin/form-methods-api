import { useContext } from "react";
import { NewContext } from "../../Components/Context/DataContext";

function About() {
  const { state, setState } = useContext(NewContext);
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
}

export default About;
