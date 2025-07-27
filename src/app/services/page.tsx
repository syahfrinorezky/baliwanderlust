import Package from "./section/Package";
import Review from "./section/Review";

export default function Services() {
  return (
    <div className="space-y-20 bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out">
      <Package />
      <Review />
    </div>
  );
}
