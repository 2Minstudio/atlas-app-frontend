import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function PaymentInfo({ transactions }) {
  return transactions?.map((t, i) => (
    <Card className="mt-2 mb-5" key={`pay-${i}`}>
      <Card.Header>
        <Card.Title>
          <h4>{t.transaction_id} <Badge>{t.status}</Badge></h4>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text><Badge>Rs. {t.amount}</Badge></Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default PaymentInfo;
