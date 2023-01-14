import React, { useState, useEffect } from "react";

import { Alert } from "react-bootstrap";

export default function AutoHideAlert({
  message,
  duration = 1000,
  variant = "success",
  onClose = () => {},
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
  });

  return (
    <>
      <Alert show={visible} variant={variant}>
        {message}
      </Alert>
    </>
  );
}
