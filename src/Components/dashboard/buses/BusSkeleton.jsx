import React from "react";
import "../operatorsanddriver/DriverAndOperator.css";
import Skeleton from "react-loading-skeleton";

const BusSkeleton = ({ skeletoncount }) => {
  return Array(skeletoncount)
    .fill(0)
    .map((index) => (
      <div className="card-skeleton" key={index}>
        <Skeleton rectangle width={200} height={150} />
        <Skeleton
          rectangle
          width={180}
          height={20}
          count={3}
          style={{ marginTop: "20px" }}
        />
        <Skeleton
          rectangle
          width={180}
          height={20}
          count={3}
          style={{ marginTop: "20px" }}
        />
        <Skeleton
          rectangle
          width={180}
          height={20}
          count={3}
          style={{ marginTop: "20px", padding: "0 10px 0 10px" }}
        />
      </div>
    ));
};

export default BusSkeleton;
