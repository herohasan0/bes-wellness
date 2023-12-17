import { useTable, useExpanded, useSortBy } from "react-table";
import React, { Fragment } from "react";
import classNames from "classnames";

export default function TableComponent({
  data = [],
  columns = [],
  handleRowClick = () => {},
  handleColumnClick = () => {},
  className,
  subRowComponenetHandler,
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
                  className="bg-white text-gray-700 font-medium text-xs text-left py-5 px-3 uppercase border-b-2 border-gray-200/80"
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
                    "transition border-b border-gray-200/80 bg-white",
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

                {row.isExpanded && subRowComponenetHandler && (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {subRowComponenetHandler(row)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
