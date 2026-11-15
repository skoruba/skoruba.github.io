import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

/**
 * Card with a cursor-following highlight (driven by a small script in BaseLayout).
 * Renders a link when href is given.
 */
const Card = ({ children, className = "", href }: CardProps) => {
  const cls = `card card-hover spotlight block ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={`group ${cls}`}
      >
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
};

export default Card;
