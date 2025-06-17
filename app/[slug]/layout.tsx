const CardLayout = async ({
  children,
}: React.PropsWithChildren): Promise<React.ReactNode> => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {children}
    </div>
  );
};

export default CardLayout;
