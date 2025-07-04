import { Container } from './components/container';
import { Header } from './components/header';
import { MenuSidebar } from './components/menu';

export function App() {
  return (
    <div>
      <MenuSidebar />

      <Container>
        <Header
          title="Home"
          subtitle="Acompanhe os pedidos dos clientes"
          icon="home"
        />

        <main>Welcome to the Waiter Dashboard!</main>
      </Container>
    </div>
  );
}
