import { useSelector } from "react-redux";


const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter)

  return (
    <p className="lead mb-4">
      Current Counter value : {counter}
    </p>
  );
};

export default DisplayCounter;
