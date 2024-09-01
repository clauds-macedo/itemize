type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const CardImage: React.FC<CardImageProps> = ({
  className,
  ...props
}) => {
  return <img className={`rounded-lg w-full ${className}`} {...props} />;
};
