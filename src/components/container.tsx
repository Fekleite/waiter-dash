interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="mt-10 ml-28 flex flex-col gap-12 px-9">{children}</div>
  );
}
