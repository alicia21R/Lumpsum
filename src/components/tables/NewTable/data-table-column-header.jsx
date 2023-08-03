import { ChevronsUpDown, EyeOff, SortAsc, SortDesc } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../buttons/Button";
import { cn } from "../../../helpers/utils";

export function DataTableColumnHeader({ column, title, className }) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex py-2 items-center space-x-2 ", className)}>
      <span className="capitalize">{title}</span>
    </div>
  );
}
