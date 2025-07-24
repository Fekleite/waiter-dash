import { Header } from '@/components/header';
import { Board } from '@/components/kanban/board';

export function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header
        title="Home"
        subtitle="Acompanhe os pedidos dos clientes"
        icon="home"
      />

      <Board />
    </div>
  );
}
