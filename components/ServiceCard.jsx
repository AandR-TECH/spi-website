// components/ServiceCard.jsx
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  title,
  shortDescription,
  description,
  image,
  href = "/contact",
  buttonLabel = "Request a Quote",
  highlights = [],
  featured = false,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border shadow-2xl transition duration-200 hover:-translate-y-1 ${
        featured
          ? "border-[#7FC7F2]/25 bg-white/[0.07] shadow-black/20"
          : "border-[#1076BA]/15 bg-white shadow-slate-950/10"
      }`}
    >
      {image && (
        <div className="relative h-64 w-full overflow-hidden bg-[#062238]">
          <Image
            src={image}
            alt={`${title} service`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <div
            className={`absolute inset-0 ${
              featured
                ? "bg-gradient-to-t from-[#062238]/90 via-[#062238]/25 to-transparent"
                : "bg-gradient-to-t from-black/45 via-transparent to-transparent"
            }`}
          />
        </div>
      )}

      <div className="flex h-full flex-col p-7">
        <h3
          className={`text-2xl font-bold ${
            featured ? "text-white" : "text-[#062238]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-4 leading-7 ${
            featured ? "text-blue-50/75" : "text-slate-700"
          }`}
        >
          {shortDescription || description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  featured
                    ? "border border-[#7FC7F2]/15 bg-white/[0.06] text-blue-50"
                    : "border border-[#1076BA]/15 bg-[#E8F4FB] text-[#062238]"
                }`}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7">
          <Link
            href={href}
            className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 ${
              featured
                ? "bg-red-600 text-white shadow-lg shadow-red-950/30 hover:scale-[1.02] hover:bg-red-700 focus:ring-red-300"
                : "bg-[#062238] text-white hover:bg-[#1076BA] focus:ring-[#7FC7F2]"
            }`}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}