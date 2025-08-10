import { Link } from "@/i18n/navigation";

export default function TrainingBlock({
  title,
  description,
  icon: Icon,
  imagePosition = "left",
  more,
  href,
}) {
  const isLeft = imagePosition === "left";

  return (
    <div className={`flex flex-col-reverse md:flex-row items-center gap-10 mb-20 ${!isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Icon + Text */}
      <div className="md:w-1/2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
          <Icon className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-500 text-base mb-6">{description}</p>
        <Link
          href={href}
          className="text-slate-700 font-semibold underline hover:text-slate-600 transition"
        >
          {more} →
        </Link>
      </div>

      {/* Decorative container */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full h-64 bg-gradient-to-br from-emerald-100 to-white rounded-3xl shadow-inner" />
      </div>
    </div>
  );
}
