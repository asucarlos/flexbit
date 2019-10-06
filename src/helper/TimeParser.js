const TimeParser = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return minutes > 0 ? `${minutes}min ${seconds}sec` : `${seconds} sec`;
};


export default TimeParser;
