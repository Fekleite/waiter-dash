import {
  CircleUser,
  Home,
  NotebookText,
  Power,
  ReceiptText,
  Users,
} from 'lucide-react';

export function MenuSidebar() {
  return (
    <aside className="flex h-screen w-28 flex-col bg-gray-0">
      <header className="flex w-full items-center justify-center py-10">
        <span className="font-extralight text-2xl text-gray-400">
          <strong className="font-black">W</strong>A
        </span>
      </header>

      <nav className="flex-1">
        <a
          href="/"
          className="flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400"
        >
          <Home className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Home</span>
          <div className="h-px w-3 bg-gray-0" />
        </a>

        <a
          href="/"
          className="flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400"
        >
          <ReceiptText className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Histórico</span>
          <div className="h-px w-3 bg-gray-0" />
        </a>

        <a
          href="/"
          className="flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400"
        >
          <NotebookText className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Cardápio</span>
          <div className="h-px w-3 bg-gray-0" />
        </a>

        <a
          href="/"
          className="flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400"
        >
          <Users className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Usuários</span>
          <div className="h-px w-3 bg-gray-0" />
        </a>
      </nav>

      <footer>
        <button
          type="button"
          className="flex w-full flex-col items-center justify-center gap-2 py-8"
        >
          <CircleUser className="size-6 text-gray-400" />
          <span className="font-medium text-sm">Meu Perfil</span>
        </button>

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
