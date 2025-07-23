import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import quoteImg from "../assets/images/bg-quotes.png";
const reviewsData = [
  {
    id: "profile-1",
    text: "Fylo has improved our team productivity by and order of magnitude. Since making switch our team has become a well-oiled collaboration machine.",
    name: "Sattish Patel",
    job: "Founder & CEO, Huddle",
    image: profile1,
  },
  {
    id: "profile-2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias minima numquam deleniti eligendi dolorem, et iure explicabo debitis voluptatibus.",
    name: "Bruce McKenzie",
    job: "Founder & CEO",
    image: profile2,
  },
  {
    id: "profile-3",
    text: "Alias adipisci soluta officia et tempore voluptatem temporibus inventore architecto quidem cum accusamus nobis natus ea fugit ullam in doloribus earum provident hic.",
    name: "Iva Boyd",
    job: "Founder & CEO",
    image: profile3,
  },
];
export default function Reviews() {
  return (
    <section className="md:pb-20">
      <div className="flex flex-col md:flex-row text-white gap-8 md:gap-10 relative max-w-xs md:max-w-7xl mx-auto ">
        <img
          src={quoteImg}
          alt=""
          className="absolute w-10 md:w-auto -top-6 md:-top-8 left-2 md:-left-2 z-0"
        />
        {reviewsData.map((review) => (
          <div
            key={review.name}
            className="z-20 p-6 flex-1 pt-8 rounded-lg bg-primary-navy-800 flex flex-col gap-5 justify-between"
          >
            <p>{review.text}</p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={review.image}
                  alt={review.name}
                  className="size-8 rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="opacity-80">{review.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
