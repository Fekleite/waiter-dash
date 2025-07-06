interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
  return <div className="my-10 w-full px-9">{children}</div>;
}
