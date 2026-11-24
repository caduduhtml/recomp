import { useEffect } from 'react';
export function Theme({files}:{files:string[]}){
 useEffect(()=>{
   const links=files.map(f=>{const l=document.createElement('link');l.rel='stylesheet';l.href=`/styles/${f}`;l.dataset.triadeTheme='1';document.head.appendChild(l);return l;});
   return ()=>links.forEach(l=>l.remove());
 },[files.join('|')]);
 return null;
}
