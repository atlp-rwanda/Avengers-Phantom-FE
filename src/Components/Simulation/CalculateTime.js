export const calculateTime = (summary) => {
  let TotalDistance = summary?.totalDistance / 1000;

  let TotalTime = Math.round((summary?.totalTime % 3600) / 60);

  return TotalDistance.toFixed(1) + " Km" + " " + TotalTime + " min";
};
