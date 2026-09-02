import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

/**
 * Renders a plain string, converting inline [label](/path) markers into links.
 * Internal paths (starting with "/") use next/link; anything else opens in a new tab.
 * Deliberately minimal — no bold/italic/markdown beyond links.
 */
const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g

export function parseInline(text: string, linkClassName = 'text-gold hover:underline'): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const re = new RegExp(LINK_RE)

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</Fragment>)
    }
    const [, label, href] = match
    nodes.push(
      href.startsWith('/') ? (
        <Link key={`l-${match.index}`} href={href} className={linkClassName}>
          {label}
        </Link>
      ) : (
        <a
          key={`l-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {label}
        </a>
      )
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${lastIndex}`}>{text.slice(lastIndex)}</Fragment>)
  }

  return nodes
}

export default function RichText({
  text,
  className,
  linkClassName,
}: {
  text: string
  className?: string
  linkClassName?: string
}) {
  return <p className={className}>{parseInline(text, linkClassName)}</p>
}
