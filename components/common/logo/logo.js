import Image from "next/image";
import Link from "next/link";

export default function Logo(props) {
  const { align, hideText = true } = props;
  const subText = hideText ? (
    <span className="pt-4 text-success">
      <b>Academy</b>
    </span>
  ) : (
    ""
  );
  return (
    <>
      <Link
        href={"/"}
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <span className={align ? "left" : "ps-3"}>
          <Image width="120" height="65" alt="Logo" src="/image/logo.png" />
        </span>
        {subText}
      </Link>
    </>
  );
}
