import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleIncrement } from "../Redux/action";
import { store } from "../Redux/store";

const CounterApp = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
//   const count = useSelector((store) => store.count);
  console.log(`count: ${count}`);

//   const count1 = store.getState().count;
//   console.log(count1);
const nextPage = () => {
    navigate('/nextpage');
}

  return (
    <div>
      <h1>Counter Using Redux</h1>
      <h2>Counter</h2>
      <button onClick={() => dispatch(handleIncrement())}>BUTTON</button>
      <br />
      <br />
      <button
      onClick={() => nextPage()}
      >BUTTON TO GO TO NEXT PAGE</button>
    </div>
  );
};

export default CounterApp;
