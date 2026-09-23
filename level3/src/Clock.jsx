import { useEffect, useState } from "react";

const Clock = ({ color }) => {

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div>
      <h1
        style={{
            
          color: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          
        }}
      >
        
        {time}
      </h1>
    </div>
  );
};

export default Clock;