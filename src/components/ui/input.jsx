import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] text-white rounded-md border border-white focus:border-green-600 font-light px-4 py-5 text-base placeholder:text-white/60 outline-none "
      )}
      {...props} />
  );
}

export { Input }
