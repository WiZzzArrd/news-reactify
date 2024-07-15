import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Component, type, count, direction) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <Skeleton direction={direction} type={type} count={count}></Skeleton>
      );
    }

    return <Component {...restProps}></Component>;
  };
}
