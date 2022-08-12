import Link from "next/link";

type Props = {
  link: string
  children: React.ReactNode;
};

const CustomLink = ({ link, children }: Props) => {
  return (
    <Link href={link}>
      <a>{children}</a>
    </Link>
  );
};

export default CustomLink;
