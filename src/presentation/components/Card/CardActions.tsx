type CardActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const CardActions: React.FC<CardActionsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`flex space-x-2 mt-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
