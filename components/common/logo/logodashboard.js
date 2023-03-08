import Image from "next/image";
import Link from "next/link";

export default function Logo(props) {
  const { align, hideText = true } = props;
  const subText = hideText ? (
    <span className="pt-3 pe-3 text-success">
     
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
        <span className={align ? "left" : "ps-0"}>
          <Image width="200" height="52" alt="Logo" src="/image/logo.png" />
        </span>
        {subText}
      </Link>
    </>
  );
}
