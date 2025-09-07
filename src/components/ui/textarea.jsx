import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] text-white w-full rounded-md border border-white px-4 py-5 text-base placeholder:text-white focus-visible: outline-none focus-visible:ring-1 focus-visible:ring-green-600 focus-visible: ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Textarea }
