import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const INPUT = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: INPUT.current.value,
      },
    });
    INPUT.current.value = " ";
  };

  const handleSubract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: INPUT.current.value,
      },
    });
    INPUT.current.value = " ";
  };

  const handleToggle = () =>{
    dispatch({type : "P_T"});
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
