import Feature from "./feature";

function Features({ features }) {
  return (
    <div className="row text-success mt-3">
      {features.map((feat, i) => (
        <Feature
          key={`feat-${i}`}
          image={feat.image}
          text={feat.text}
        ></Feature>
      ))}
    </div>
    
  );
}
export default Features;
