import DataPagination from "./pagination";
import DataTable from "./table";

function DataList({ headings, data, pagecallback, buttons, sourcemapper }) {
  return (
    <>
      <DataTable headings={headings} data={data?.results} buttons={buttons} sourcemapper={sourcemapper}>
        <DataPagination pagination={data?.pagination} pagecallback={pagecallback} />
      </DataTable>
    </>
  );
}
export default DataList;
