import Feature from "./feature";

function Features({ features }) {
  return (
    <div className="row text-success mt-3">
      {features.map((feat) => (
        <Feature image={feat.image} text={feat.text}></Feature>
      ))}
    </div>
  );
}
export default Features;
