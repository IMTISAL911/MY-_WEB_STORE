


export default function LogoSvg() {
  return (
    <div className="flex justify-center items-center">
      <svg
        viewBox="0 0 320 80"
        className="w-72 h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        <path
          d="M15 25 h40 v35 a6 6 0 0 1 -6 6 h-28 a6 6 0 0 1 -6 -6 z"
          fill="url(#grad)"
        />

        <path
          d="M22 25 a13 13 0 0 1 26 0"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
        />

        <text x="28" y="55" fontSize="26" fontWeight="bold" fill="white">
          S
        </text>

        <text x="70" y="52" fontSize="32" fontWeight="700" fill="#2563eb">
          Shop
        </text>

        <text x="155" y="52" fontSize="32" fontWeight="700" fill="#f97316">
          Sphere
        </text>
      </svg>
    </div>
  );
}
