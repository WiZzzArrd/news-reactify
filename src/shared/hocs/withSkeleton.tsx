import React from "react";
import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";

interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <Skeleton direction={direction} type={type} count={count}></Skeleton>
      );
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
