import { useContext } from "react";
import { NewContext } from "../../Components/Context/DataContext";

function Home() {
  const { state, setState } = useContext(NewContext);
  return (
    <div>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
}

export default Home;
