// components/Timer.tsx
import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer: React.FC = () => {
  const [timerKey, setTimerKey] = useState(0);

  const handleStartTimer = () => {
    // TODO: Add logic to update Firestore status or perform any necessary actions
    // ...

    // Incrementing the key will restart the CountdownCircleTimer
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <button onClick={handleStartTimer}>Start Timer</button>
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={false} // Set this to true to start the timer automatically
        duration={25 * 60} // 25 minutes in seconds
        colors={[['#009900', 0.33], ['#ff6600', 0.33], ['#ff0000']]}
        size={120}
        strokeWidth={10}
        onComplete={() => {
          // TODO: Handle logic when the timer completes (update Firestore status, etc.)
          // ...

          // Example: You might want to start a break timer or mark the task as complete
          // Example: You can call a function like handleTimerComplete() here
        }}
      >
        {({ remainingTime }) => (
          <div>
            {/* Display minutes and seconds */}
            <div>{Math.floor(remainingTime / 60)}</div>
            <div>{remainingTime % 60}</div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;