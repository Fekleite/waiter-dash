import { Power } from 'lucide-react';

import { Link } from './link';

export function MenuSidebar() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 flex h-screen w-28 flex-col bg-gray-0">
      <header className="flex w-full items-center justify-center py-10">
        <span className="font-extralight text-2xl text-gray-400">
          <strong className="font-bold">W</strong>A
        </span>
      </header>

      <nav className="flex-1">
        <Link to="/" label="Home" icon="home" />

        <Link to="/history" label="Histórico" icon="receipt-text" />

        <Link to="/menu" label="Cardápio" icon="notebook-text" />

        <Link to="/users" label="Usuários" icon="users" />
      </nav>

      <footer>
        <Link to="/me" label="Meu Perfil" icon="circle-user" />

        <button
          type="button"
          className="flex w-full flex-col items-center justify-center gap-2 py-8"
        >
          <Power className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Sair</span>
        </button>
      </footer>
    </aside>
  );
}
