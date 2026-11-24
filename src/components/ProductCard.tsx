import type { Product } from '../types';
import { money, load, save } from '../utils';
import { useState } from 'react';

export function ProductCard({p,onCustom}:{p:Product;onCustom?:()=>void}){
 const [added,setAdded]=useState(false);
 function add(){
  const cart=load<any[]>('triade-cart',[]);
  const i=cart.findIndex(x=>x.id===p.id);
  if(i>=0) cart[i].quantity+=1; else cart.push({...p,quantity:1});
  save('triade-cart',cart); setAdded(true); setTimeout(()=>setAdded(false),1200);
 }
 return <article className="pcard">
  <a className="pimg" href={`#/${p.id<200?'eletro-install':'studio-verso'}/produto/${p.id}`}>
   {p.oldPrice&&<span className="tag">Oferta</span>}
   <img loading="lazy" src={p.image||'/assets/eletro/img/no-image.svg'} alt={p.name}/>
  </a>
  <div className="pbody"><span className="pbrand">{p.category}</span><a className="pname" href="#">{p.name}</a>
  <div className="pprice"><span className="price">{money(p.price)}</span>{p.oldPrice&&<span className="price-old">{money(p.oldPrice)}</span>}</div>
  <button className="btn btn-primary btn-sm btn-block" onClick={p.custom?onCustom:add}>{p.custom?'Personalizar e pedir':added?'Adicionado ✓':'Adicionar'}</button></div>
 </article>
}
