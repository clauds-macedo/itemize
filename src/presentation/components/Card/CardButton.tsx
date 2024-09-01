type CardButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CardButton: React.FC<CardButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center ${className}`}
      type="button"
      {...props}
    />
  );
};
