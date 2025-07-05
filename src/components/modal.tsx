import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
}: Readonly<ModalProps>) {
  useEffect(() => {
    function handleKeyDown(this: Document, event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      role="dialog"
    >
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="font-semibold text-2xl">{title}</h1>

          <button type="button" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar</span>
          </button>
        </header>

        <div>{children}</div>
      </div>
    </div>
  );
}
