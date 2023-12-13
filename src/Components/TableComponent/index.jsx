import { useTable, useExpanded, useSortBy } from "react-table";
import React, { Fragment } from "react";
import classNames from "classnames";

export default function TableComponent({
  data = [],
  columns = [],
  handleRowClick = () => {},
  noRowbg,
  handleColumnClick = () => {},
  className,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      sortTypes: {
        alphanumeric: (row1, row2, columnName) => {
          const rowOneColumn = row1.values[columnName];
          const rowTwoColumn = row2.values[columnName];
          if (rowOneColumn == null && rowTwoColumn == null) {
            return 1;
          }
          if (rowOneColumn == null && rowTwoColumn != null) {
            return 1;
          }
          if (rowOneColumn != null && rowTwoColumn == null) {
            return -1;
          }

          if (Number.isNaN(Number(rowOneColumn))) {
            return rowOneColumn.toUpperCase() > rowTwoColumn.toUpperCase()
              ? 1
              : -1;
          }
          return Number(rowOneColumn) > Number(rowTwoColumn) ? 1 : -1;
        },
      },
    },
    useSortBy,
    useExpanded
  );

  return (
    <div className={classNames("w-full shadow-md overflow-x-auto", className)}>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th
                  onClick={(e) => handleColumnClick(e)}
                  key={i}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="bg-gray-100 text-gray-700 font-medium text-xs text-left py-5 px-3 uppercase"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <Fragment key={index}>
                <tr
                  onClick={() => handleRowClick(row)}
                  {...row.getRowProps()}
                  className={classNames(
                    "transition border-b border-gray-100",
                    noRowbg && "hover:bg-transparent",
                    handleRowClick && "cursor-pointer"
                  )}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        className="py-4 px-3 text-sm"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
