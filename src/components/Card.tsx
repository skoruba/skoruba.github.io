import { MouseEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const setSpot = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/** Card with a cursor-following highlight. Renders a link when href is given. */
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
        onMouseMove={setSpot}
      >
        {children}
      </a>
    );
  }
  return (
    <div className={cls} onMouseMove={setSpot}>
      {children}
    </div>
  );
};

export default Card;
