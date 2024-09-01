type CardPriceProps = React.HTMLAttributes<HTMLDivElement>;

export const CardPrice: React.FC<CardPriceProps> = ({
  className,
  ...props
}) => {
  return <div className={`text-xl font-bold ${className}`} {...props} />;
};
