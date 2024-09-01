type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  ...props
}) => {
  return <h3 className={`text-lg font-bold mt-2 ${className}`} {...props} />;
};
