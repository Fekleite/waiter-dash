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
          <strong className="font-bold">W</strong>A
        </span>
      </header>

      <nav className="flex-1">
        <a
          href="/"
          className="group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500"
        >
          <Home className="group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500" />
          <span className="font-medium text-sm">Home</span>
          <div className="box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500" />
        </a>

        <a
          href="/"
          className="group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500"
        >
          <ReceiptText className="group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500" />
          <span className="font-medium text-sm">Histórico</span>
          <div className="box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500" />
        </a>

        <a
          href="/"
          className="group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500"
        >
          <NotebookText className="group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500" />
          <span className="font-medium text-sm">Cardápio</span>
          <div className="box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500" />
        </a>

        <a
          href="/"
          className="group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500"
        >
          <Users className="group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500" />
          <span className="font-medium text-sm">Usuários</span>
          <div className="box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500" />
        </a>
      </nav>

      <footer>
        <a
          href="/"
          className="group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500"
        >
          <CircleUser className="group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500" />
          <span className="font-medium text-sm">Meu Perfil</span>
          <div className="box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500" />
        </a>

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
