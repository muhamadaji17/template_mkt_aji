import Link from "next/link";

const Links = ({ children, linkurl, className }) => {
  return (
    <Link href={linkurl} className={`no-underline ${className}`}>
      {children}
    </Link>
  );
};

export default Links;
