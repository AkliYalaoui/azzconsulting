import { Link } from "@/i18n/navigation";

export default function TrainingBlock({
  title,
  description,
  icon: Icon,
  imagePosition = "left",
  href,
}) {
  const isLeft = imagePosition === "left";

  return (
    <div className={`flex flex-col-reverse md:flex-row items-center gap-10 mb-20 ${!isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Icon + Text */}
      <div className="md:w-1/2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
          <Icon className="w-8 h-8 text-blue-700" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-base mb-6">{description}</p>
        <Link
          href={href}
          className="text-blue-800 font-semibold underline hover:text-blue-600 transition"
        >
          En savoir plus →
        </Link>
      </div>

      {/* Decorative container */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-white rounded-3xl shadow-inner" />
      </div>
    </div>
  );
}
