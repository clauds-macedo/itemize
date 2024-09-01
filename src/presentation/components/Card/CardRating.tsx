type CardRatingProps = React.HTMLAttributes<HTMLDivElement>;

export const CardRating: React.FC<CardRatingProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`} {...props}>
      <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
        {children}
      </span>
      <span className="text-sm">★</span>
    </div>
  );
};
