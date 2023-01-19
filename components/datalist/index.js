import DataPagination from "./pagination";
import DataTable from "./table";

function DataList({ headings, data, pagination, pagecallback, buttons, sourcemapper }) {
  return (
    <>
      <DataTable headings={headings} data={data} buttons={buttons} sourcemapper={sourcemapper}>
        <DataPagination pagination={pagination} pagecallback={pagecallback} />
      </DataTable>
    </>
  );
}
export default DataList;
