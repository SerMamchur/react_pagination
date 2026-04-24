import classNames from 'classnames';
import React from 'react';

type Props = {
  total: number;
  perPage: number;
  page: string;
  onPageChange: (page: number) => void;
  handlePgeChange: (value: number) => void;
  lastPage: boolean;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  page,
  onPageChange,
  handlePgeChange,
  lastPage,
  currentPage,
}) => {
  const totalPage = Math.ceil(total / perPage);
  const pages = Array.from({ length: totalPage }, (__dirname, i) => i + 1);

  return (
    <ul className="pagination">
      <li
        className={classNames('page-item', {
          disabled: currentPage === 1,
        })}
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          onClick={e => {
            e.preventDefault();
            if (currentPage > 1) {
              handlePgeChange(currentPage - 1);
            }
          }}
        >
          «
        </a>
      </li>

      {pages.map(pageNumber => {
        return (
          <li
            value={page}
            className={classNames('page-item', {
              active: Number(page) === pageNumber,
            })}
            key={pageNumber}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${pageNumber}`}
              onClick={e => {
                e.preventDefault();
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </a>
          </li>
        );
      })}
      <li
        className={classNames('page-item', {
          disabled: lastPage,
        })}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={lastPage ? 'true' : 'false'}
          onClick={e => {
            e.preventDefault();

            if (!lastPage) {
              handlePgeChange(currentPage + 1);
            }
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
