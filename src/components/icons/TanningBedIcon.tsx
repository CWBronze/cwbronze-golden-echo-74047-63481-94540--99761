interface TanningBedIconProps {
  className?: string;
}

const TanningBedIcon = ({ className = "w-8 h-8" }: TanningBedIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 32C8 19.85 17.85 10 30 10H34C46.15 10 56 19.85 56 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 36C12 25.51 20.51 17 31 17H33C43.49 17 52 25.51 52 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="20" y1="20" x2="20" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="16" x2="26" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="14" x2="32" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="16" x2="38" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="20" x2="44" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="42" r="6" stroke="currentColor" strokeWidth="3" fill="none" />
      <ellipse cx="32" cy="50" rx="12" ry="4" fill="currentColor" />
    </svg>
  );
};

export default TanningBedIcon;
