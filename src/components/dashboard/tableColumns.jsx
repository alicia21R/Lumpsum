import { DataTableColumnHeader } from "../tables/NewTable/data-table-column-header";
import { DataTableRowActions } from "../tables/NewTable/data-table-row-actions";
// import { DataTableRowActions } from './data-table-row-actions';

export const columns = [
  {
    accessorKey: "invoice_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice ID." />
    ),
    cell: ({ row }) => {
      const data = row.original;
      return <div className="flex space-x-2">{row.getValue("invoice_id")}</div>;
    },
  },
  {
    accessorKey: "product",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.getValue("product")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.getValue("status")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.original.amount}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Balance" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {Number(row.getValue("balance")).toLocaleString()}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-gray-500">
            {row.getValue("date")}
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
