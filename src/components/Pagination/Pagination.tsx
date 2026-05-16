import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from "./Pagination.module.css";

type ModuleWithDefault<T> = {
  default: T;
};

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) =>
        onPageChange(selected + 1)
      }
      previousLabel="←"
      nextLabel="→"
      containerClassName={
        css.pagination
      }
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
      previousClassName={css.page}
      previousLinkClassName={
        css.pageLink
      }
      nextClassName={css.page}
      nextLinkClassName={css.pageLink}
      activeClassName={css.active}
      disabledClassName={css.disabled}
      breakClassName={css.page}
      breakLinkClassName={css.pageLink}
    />
  );
}
