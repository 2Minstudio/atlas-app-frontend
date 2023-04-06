import { Button } from "react-bootstrap";

import Link from "next/link";

function ActionButton(btn, row) {
  // console.log(btn, "btn", row);
  let show = true;
  if (btn?.rule) {
    show = false;
    Object.keys(btn.rule).map((k) => {
      console.log(k, row[k]);
      if (row[k].length > 0) {
        show = eval(
          `${row[k]} ${btn.rule[k]["condition"]} ${btn.rule[k]["value"]}`
        );
      } else {
        show = true;
      }
    });
  }
  if (!show) return <></>;
  if (btn?.type == "link" && btn?.link) {
    let link = btn?.link;
    if (btn.replacetokens)
      Object.keys(btn.replacetokens).map((t) => {
        const val = row[btn.replacetokens[t]];
        link = link.replace(t, val);
      });

    return (
      <Link href={link}>
        <Button
          variant={btn?.variant}
          className="btn rounded-pill px-3"
          size="md"
        >
          {btn.label}
        </Button>
      </Link>
    );
  }

  if (btn?.type == "button") {
    return (
      <Button
        className="btn rounded-pill px-3"
        size="md"
        onClick={() => btn.onclick(row[btn.key])}
        variant={btn?.variant}
      >
        {btn.label}
      </Button>
    );
  }
}
export default ActionButton;
