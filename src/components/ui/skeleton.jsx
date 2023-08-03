import { cn } from "../../helpers/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
