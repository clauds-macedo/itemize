type PageTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const PageTitle: React.FC<PageTitleProps> = ({
  className,
  ...props
}) => {
  return <h1 className={`text-2xl font-bold mb-4 ${className}`} {...props} />;
};
