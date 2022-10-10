function Counter() {
  let number = 0;
  return (
    <>
      <h1> {number} </h1>
      <button
        onClick={() => {
          number += 1;
        }}
      ></button>
      <button
        onClick={() => {
          number -= 1;
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
