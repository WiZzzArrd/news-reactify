import React from "react";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import { IPaginationProps } from "../../model/types";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export default function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}
