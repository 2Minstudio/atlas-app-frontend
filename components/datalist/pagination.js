import Pagination from "react-bootstrap/Pagination";
function DataPagination({ pagination, pagecallback }) {
  if (pagination?.count > 0) {
    const { pages, next, previous, page_size, current_page } = pagination;
    return (
      <Pagination>
        {[...Array(pages).keys()].map((p) => {
          let pno = p + 1;
          return (
            <Pagination.Item
              key={pno}
              active={pno === current_page}
              onClick={() => pagecallback(pno)}
            >
              {pno}
            </Pagination.Item>
          );
        })}
      </Pagination>
    );
  }
  return <></>;
}

export default DataPagination;
