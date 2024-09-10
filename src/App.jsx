import React, { useReducer } from "react";

const reducer = (store, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (store = store + action.payload);
      } else {
        return (store = store + 1);
      }

      break;
    }
    case "decrease": {
      if (store > 0) {
        return (store = store - 1);
      } else return store;
    }
    case "addWithpayload": {
      return (store = store + action.payload);
    }

    default: {
      return store;
    }
  }
};

const App = () => {
  const [state, dispatcher] = useReducer(reducer, 0);

  const handleAdd = () => {
    dispatcher({ type: "increase", payload: 10 });
  };

  const handleRemove = () => {
    dispatcher({ type: "decrease" });
  };

  const handlepayload = () => {
    dispatcher({ type: "addWithpayload", payload: 100 });
  };

  return (
    <div className=" space-x-5 flex justify-center items-center mt-10">
      <h1 className=" text-3xl font-bold">{state}</h1>
      <button onClick={handleAdd} className='bg-blue-500 border border-blue-500 m-2 p-1 bottom-1'>Add</button>
      <button onClick={handleRemove} className=" bg-red-500 border border-blue-500 m-2 p-1 bottom-1">Remove</button>
      <button
        className="bg-green-500 border border-blue-500 m-2 p-1 bottom-1 "
        onClick={handlepayload}
      >
        payload
      </button>
    </div>
  );
};

export default App;
