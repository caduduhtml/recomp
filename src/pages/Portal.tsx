import { useEffect } from 'react';
import { navigate } from '../utils';

export function Portal(){
 useEffect(()=>{ document.title='Gerenciador de Conteúdos'; },[]);
 const cards=[
  {id:'gelacionado',name:'Gelacionado',desc:'Site institucional com foco em soluções de refrigeração. Conteúdo, estilo e estrutura reunidos no projeto.',cls:'card--gelacionado'},
  {id:'studio-verso',name:'Studio_Verso',desc:'Site institucional com identidade criativa e autoral. Catálogo artesanal, encomendas e apresentação do ateliê.',cls:'card--studio'},
  {id:'eletro-install',name:'Eletro_Install',desc:'Soluções e serviços elétricos com foco em qualidade, segurança e eficiência para ambientes residenciais e comerciais.',cls:'card--eletro'}
 ];
 return <div className="portal">
  <header className="topbar">
   <div className="topbar__brand"><span className="topbar__brand-mark"/>Gerenciador de Conteúdos</div>
   <nav className="menu" aria-label="Empresas">{cards.map(c=><a key={c.id} className={`menu__item menu__item--${c.id.replace('-','')}`} href={`#${c.id}`}>{c.name}</a>)}</nav>
  </header>
  <main className="board">{cards.map(c=><section key={c.id} id={c.id} className={`card ${c.cls}`}>
   <div className="card__logo">
    {c.id==='gelacionado' && <img src="/assets/gelacionado/logo.png" alt="Gelacionado"/>}
    {c.id==='studio-verso' && <img src="/assets/studio/img/logo-studio-verso.jpeg" alt="Studio Verso"/>}
    {c.id==='eletro-install' && <img src="/assets/eletro/img/favicon.svg" alt="Eletro Instal"/>}
   </div>
   <h2 className="card__title">{c.name}</h2><p className="card__desc">{c.desc}</p>
   <dl className="card__meta"><div className="card__meta-row"><dt>Página</dt><dd>Início</dd></div></dl>
   <button className="card__link" onClick={()=>navigate(`#/${c.id}`)}>Abrir site →</button>
  </section>)}</main>
 </div>
}
