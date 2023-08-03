import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
// import useClasses from "../../../../hooks/useClasses";

export function DataTableToolbar({ table }) {
  // const { fetchClasses, classes } = useClasses();
  const classes = [];

  // useEffect(() => fetchClasses(), []);
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by student number..."
          value={table.getColumn("student_no")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("student_no")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] !rounded-full lg:w-[250px]"
        />

        {table.getColumn("school_class_id") && (
          <DataTableFacetedFilter
            column={table.getColumn("school_class_id")}
            title="Class"
            options={classes?.map((item) => ({
              label: item?.class_name,
              value: item?.id,
            }))}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
