import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ info }) => {
  //

  ///
  return info === null ? null : (
    <Alert
      variant={info.type}
      style={{
        background: "transparent",
        color: "red",
        border: "none",
      }}
    >
      {info.message}
    </Alert>
  );
};

export default AlertMessage;
