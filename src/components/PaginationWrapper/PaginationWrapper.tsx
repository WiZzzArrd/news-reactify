import React from "react";
import Pagination from "../Pagination/Pagination";
import { IPaginationProps } from "../../interfaces/interfaces";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export default function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
