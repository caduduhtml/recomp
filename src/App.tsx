import { useEffect, useState } from 'react';
import { Portal } from './pages/Portal';
import { Gelacionado } from './pages/Gelacionado';
import { Studio } from './pages/Studio';
import { Eletro } from './pages/Eletro';

export function App() {
  const [path, setPath] = useState(window.location.hash || '#/');
  useEffect(() => {
    const sync = () => setPath(window.location.hash || '#/');
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync); };
  }, []);
  if (path.startsWith('#/gelacionado')) return <Gelacionado path={path} />;
  if (path.startsWith('#/studio-verso')) return <Studio path={path} />;
  if (path.startsWith('#/eletro-install')) return <Eletro path={path} />;
  return <Portal />;
}
