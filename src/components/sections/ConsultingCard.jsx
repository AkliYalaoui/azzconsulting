import { Link } from "@/i18n/navigation";

export default function ConsultingCard({ icon: Icon, title, description, link }) {
  return (
    <div className="bg-white border border-blue-100 rounded-3xl shadow hover:shadow-xl transition-all p-6 text-left">
      <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-blue-50">
        <Icon className="text-blue-700 w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link href={link} className="text-blue-700 font-semibold text-sm hover:underline">
        En savoir plus →
      </Link>
    </div>
  );
}
