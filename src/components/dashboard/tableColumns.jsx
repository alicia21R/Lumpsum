import { DataTableColumnHeader } from "../tables/NewTable/data-table-column-header";
import { DataTableRowActions } from "../tables/NewTable/data-table-row-actions";
// import { DataTableRowActions } from './data-table-row-actions';

export const columns = [
  {
    accessorKey: "student_no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student No." />
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div className="flex space-x-2">{row.getValue("student_no")}</div>;
    },
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.getValue("first_name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Other Name(s)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.original.other_name
              ? row.original.other_name + " " + row.getValue("last_name")
              : row.getValue("last_name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "school_class_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.original.class_name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "fees_balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance (shs.)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {Number(row.getValue("fees_balance")).toLocaleString()}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      // const { handleEditClick } = useStudent();
      return <DataTableRowActions row={row} onEdit={""} />;
    },
  },
];
