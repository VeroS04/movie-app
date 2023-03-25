import { FC, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import './style.scss'

type Props = {
  totalPages: number
  onClick: (page: string) => void
};

const Pager: FC<Props> = ({ totalPages, onClick }) => {

  const [page, setPage] = useState(1)

const pagerCount = [
    function first() { setPage(1) },
    function prev() { setPage(page - 1) },
    function next() { setPage(page + 1) },
    function last() { setPage(totalPages) }
]

useEffect(() => {
    onClick(page.toString())
}, [page])

  return (
      <Pagination className="pagination">
        <Pagination.First disabled={page === 1} onClick={pagerCount[0]} className="btn-page" />
        <Pagination.Prev disabled={page === 1} onClick={pagerCount[1]} className="btn-page" />
        <Pagination.Item value={page} className="btn-page" >{page}</Pagination.Item>
        <Pagination.Next disabled={page === totalPages} onClick={pagerCount[2]} className="btn-page" />
        <Pagination.Last disabled={page === totalPages} onClick={pagerCount[3]} className="btn-page" />
      </Pagination>
  );
};

export { Pager };
