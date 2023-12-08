import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions} from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = () => {
  const dispatch = useDispatch();
  const INPUT = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(INPUT.current.value));
    INPUT.current.value = " ";
  };

  const handleSubract = () => {
    dispatch(counterActions.subtract(INPUT.current.value));
    INPUT.current.value = " ";
  };

  const handleToggle = () =>{
    dispatch(privacyActions.toggle());
  }
   
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handleToggle}>Privacy Toggle</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center calcs">
        <input
          type="text"
          className="num-input"
          placeholder="enter the number"
          ref={INPUT}
        ></input>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleSubract}
        >
          Subract
        </button>
      </div>
    </>
  );
};

export default Controls;
