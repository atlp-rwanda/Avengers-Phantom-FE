import React, {useEffect} from 'react';

export const BusActions = ({props}) => {

  const {
    currentCoords,
    currentPosition,
    engine,
    isSlowing,
    isSpeed,
    pause,
    position,
    resume,
    setCurrentPosition,
    setCurrentCoords,
    speed,
    start,
  } = props;

  let newCursor = position.length - 1;
  let cursor = currentPosition;
  useEffect(() => {
    setCurrentCoords(position[cursor]);
    let interval;
    if (start && engine) {
      interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          newCursor = cursor;
          setCurrentPosition(cursor);
          setCurrentCoords(position[cursor]);
          return;
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    } else if (resume && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          cursor = newCursor;
          setCurrentPosition(newCursor);
          setCurrentCoords(position[newCursor]);
          return;
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    } else if (isSpeed && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          cursor = newCursor;
          setCurrentPosition(newCursor)
          setCurrentCoords(position[newCursor]);
          return;
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    } else if (isSlowing && engine) {
      interval = setInterval(() => {
        if (newCursor !== position.length - 1) {
          newCursor += 1;
          cursor = newCursor;
          setCurrentPosition(newCursor);
          setCurrentCoords(position[newCursor]);
          return;
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    } else if(pause) {
      setCurrentCoords(currentCoords);
      clearInterval(interval);
    } else {}
  }, [position, start, engine, pause, resume, isSlowing, isSpeed]);
}
