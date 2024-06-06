import { Fragment } from "react";
import { Table } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const TableWrapper = ({
  headers,
  className = "bg-primary",
  classText = "text-white",
}) => {
  return (
    <div className="table-responsive" id="table">
      <Table
        className="table-bordered table-hover dataTable align-middle table-nowrap mb-0 corner-border-table table overflow-hidden"
        style={{ borderRadius: 8 }}
      >
        <thead className={className}>
          <tr>
            {headers.map((header, i) => (
              <Fragment key={i}>
                {typeof header === "object" && header.subHeaders ? (
                  <th
                    key={i}
                    colSpan={header.subHeaders.length}
                    className={
                      "text-center fw-bold text-capitalize " + classText
                    }
                  >
                    {header.title}
                  </th>
                ) : (
                  <th
                    key={i}
                    scope="col"
                    className={
                      "text-center fw-bold text-capitalize " + classText
                    }
                  >
                    {header}
                  </th>
                )}
              </Fragment>
            ))}
          </tr>
          {headers.some(
            (header) => typeof header === "object" && header.subHeaders
          ) && (
            <tr>
              {headers.map((header, i) =>
                typeof header === "object" && header.subHeaders ? (
                  header.subHeaders.map((subHeader, j) => {
                    return (
                      <th
                        key={`${i}-${j}`}
                        scope="col"
                        className={
                          "text-center fw-bold text-capitalize " + classText
                        }
                      >
                        {subHeader}
                      </th>
                    );
                  })
                ) : (
                  <th key={i} scope="col"></th>
                )
              )}
            </tr>
          )}
        </thead>
        <tbody style={{ borderBottom: "1px solid black" }}>
          <Outlet />
        </tbody>
      </Table>
    </div>
  );
};
export default TableWrapper;
