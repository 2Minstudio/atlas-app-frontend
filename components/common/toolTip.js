import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function ToolTip({ label, variant, tipMessage, size }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.tipMessage}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip({tipMessage})}
    >
      <Button variant={variant} size={size}>{label}</Button>
    </OverlayTrigger>
  );
}

export default ToolTip;
