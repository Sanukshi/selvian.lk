import { Link } from "react-router-dom";

export default function Logo({ inverted = false, compact = false }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Selvian home">
      <img
        src="/images/logo-mark.png"
        alt="Selvian"
        className={`object-contain object-left ${
          compact ? "h-10 w-10" : "h-12 w-auto max-w-[200px] sm:h-[3.25rem] sm:max-w-[220px]"
        } ${
          inverted
            ? "brightness-0 invert drop-shadow-[0_0_12px_rgba(232,165,195,0.35)]"
            : "mix-blend-multiply"
        }`}
      />
    </Link>
  );
}
