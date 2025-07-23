type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};
export default function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="text-center flex flex-col items-center gap-6 justify-between">
      <div>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className="font-bold text-xl font-raleway pb-2">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
