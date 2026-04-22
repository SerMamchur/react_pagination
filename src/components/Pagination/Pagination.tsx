import classNames from 'classnames';
import React from 'react';

type Props = {
  pages: number[];
  page: string;
  updateParams: (key: string, value: string) => void;
  handlePgeChange: (value: number) => void;
  lastPage: boolean;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  pages,
  page,
  updateParams,
  handlePgeChange,
  lastPage,
  currentPage,
}) => {
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
                updateParams('page', String(pageNumber));
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
