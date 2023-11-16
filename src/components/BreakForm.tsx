// components/BreakForm.tsx
import React, { useState } from 'react';

const BreakForm: React.FC = () => {
  const [breakTime, setBreakTime] = useState(5);

  const handleBreakSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add logic to update Firestore status or perform any necessary actions for break time
    // ...

    console.log('Break time set:', breakTime);

    // Example: You might want to start a break timer or update Firestore status for break
    // Example: You can call a function like handleBreakTimeSet() here
  };

  return (
    <form onSubmit={handleBreakSubmit}>
      <label>
        Set Break Time (minutes):
        <input
          type="number"
          value={breakTime}
          onChange={(e) => setBreakTime(Number(e.target.value))}
        />
      </label>
      <button type="submit">Set Break</button>
    </form>
  );
};

export default BreakForm;