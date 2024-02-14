import "./FeatureCard.css";
const FeatureCard = ({ img, title, para }) => {
  return (
    <div className="FeatureCard-container">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default FeatureCard;
