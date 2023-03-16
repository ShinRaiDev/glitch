"use client"
import * as React from 'react'
import Link from 'next/link'


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>
    {
  href?: string
  onclick:any
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className,children,href,onclick, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={"btn btn-link"}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={"btn "+className}
        ref={ref}
        {...props}
        onClick={onclick}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }