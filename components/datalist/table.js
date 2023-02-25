import { Table, Stack, Button } from "react-bootstrap";
import ActionButton from "./actionbutton";
import Link from "next/link";

function DataTable({ headings, data, children, buttons, sourcemapper }) {
  const head = [];
  const datakeys = [];
  headings.map((i) => {
    const k = Object.keys(i)[0];
    datakeys.push(k);
    head.push(i[k]);
  });

  return (
    <>
      <Table className="table-hover" responsive="md">
        <thead>
          <tr>
            {head.map((i, indx) => {
              const tk = `${indx}-head`;
              return (
                <th key={tk} className="col">
                  {i}
                </th>
              );
            })}
            {buttons && <th className="col">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => {
            return (
              <>
                <tr>
                  {datakeys.map((i, indx) => {
                    const tk = `${indx}-data`;
                    let smpval = false;
                    const tdv = d[i];
                    if (sourcemapper[i]) {
                      const options = sourcemapper[i];
                      smpval = options[tdv];
                    }
                    return (
                      <td key={tk} className="py-3">
                        {smpval ? smpval : tdv}
                      </td>
                    );
                  })}

                  {buttons && (
                    <td>
                      <Stack
                        className="d-flex justify-content-start align-items-center"
                        direction="horizontal"
                        gap={3}
                      >
                        {buttons.map((b) => ActionButton(b, d))}
                      </Stack>
                    </td>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
        <tfoot>{children}</tfoot>
      </Table>
    </>
  );
}

export default DataTable;
