import Link from "next/link";

type Props = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

const CustomLink = ({ link, children, className = "" }: Props) => {
  return (
    <Link href={link}>
      <a>
        <div className={className}>{children}</div>
      </a>
    </Link>
  );
};

export default CustomLink;
