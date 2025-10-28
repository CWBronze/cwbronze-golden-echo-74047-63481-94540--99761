interface SprayGunIconProps {
  className?: string;
}

const SprayGunIcon = ({ className = "w-8 h-8" }: SprayGunIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 32L20 28L24 20L30 18L34 22L38 24L42 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 22L32 26L28 28L22 30L18 34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="36" y="22" width="8" height="6" rx="2" fill="currentColor" />
      <circle cx="48" cy="28" r="1.5" fill="currentColor" />
      <circle cx="52" cy="30" r="1.5" fill="currentColor" />
      <circle cx="56" cy="32" r="1.5" fill="currentColor" />
      <circle cx="50" cy="34" r="1.5" fill="currentColor" />
      <circle cx="54" cy="36" r="1.5" fill="currentColor" />
      <circle cx="58" cy="38" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default SprayGunIcon;
