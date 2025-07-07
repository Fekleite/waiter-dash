import { useNavigate } from 'react-router';

import { Button } from '@/components/button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <h1 className="font-black text-9xl">404</h1>

      <p>Não encontramos a página que você tentou acessar.</p>

      <Button
        title="Retornar para Home"
        variant="secondary"
        onClick={() => navigate('/')}
      />
    </div>
  );
}
