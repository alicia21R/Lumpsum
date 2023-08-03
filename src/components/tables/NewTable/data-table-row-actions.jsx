import { MoreHorizontal, Pen, Trash } from "lucide-react";

import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
// import { useDispatch } from "react-redux";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { Banknote } from "lucide-react";
// import {
//   setSelectedRowData,
//   toggleDialogOpen,
// } from '@/redux/reducers/mobileDevices';

export function DataTableRowActions({ row, onEdit }) {
  // const dispatch = useDispatch();

  const handleEditClick = (rowData) => {
    // dispatch(setSelectedRowData(rowData));
    // dispatch(toggleDialogOpen());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-min-[160px]">
        <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
          <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleEditClick(row.original)}
          className="cursor-pointer"
        >
          <Banknote className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Attach Payables
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="cursor-pointer text-red-800">
          <Trash className="mr-2 h-3.5 w-3.5 " />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
        <Arrow className="fill-white" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
