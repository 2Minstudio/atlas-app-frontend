import Image from "next/image";
import Link from "next/link";

export default function Logo(props) {
  const { align, hideText = true } = props;
  const subText = hideText ? (
    <span className="pt-3 pe-3 text-success">
      <b><small>Academy</small></b>
    </span>
  ) : (
    ""
  );
  return (
    <>
      <Link href={"/"}>
        <a className="d-flex align-items-center text-dark text-decoration-none">
          <span className={align ? "left" : "ps-0"}>
            <Image width="111" height="60" alt="Logo" src="/image/logo.png" />
          </span>
          {subText}
        </a>
      </Link>
    </>
  );
}
