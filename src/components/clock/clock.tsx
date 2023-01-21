import { useState, useEffect } from "react";
import moment from "moment-timezone";
import styled from "styled-components";

type ClockProps = {
  tzId: string;
};

const Clock = ({ tzId }: ClockProps) => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <>{time.tz(tzId).format("HH:mm:ss")} </>;
};

export default Clock;

