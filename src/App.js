import React, { useState } from "react";

export default function App() {
  const [sum, setSum] = useState(0);
  const [soA, setA] = useState(0);
  const [soB, setB] = useState(0);

  const handleSum = () => {
    setSum(parseInt(soA) + parseInt(soB));
  }

  return (
    <>
      <div className="container">
        <div className="form-group">
          Số A: <input type="number" className="form-control" onChange={(e) => setA(e.target.value)} />
        </div>
        <div className="form-group">
          Số B: <input type="number" className="form-control" onChange={(e) => setB(e.target.value)} />
        </div>
        <div className="form-group">
          sum = {sum}
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => handleSum()}>Tính</button>
        </div>
      </div>
    </>
  );
}
