import Link from "next/link"
import React from "react"

export default function LinkApp({children, href, className, ...props}: {
    children: React.ReactNode
    href: string | undefined,
    className?: string
} & React.HTMLAttributes<HTMLAnchorElement>) {
  if (!href) return null;
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
