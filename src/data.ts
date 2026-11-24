import type { Product } from './types';

export const eletroProducts: Product[] = [
 {id:1,name:'Cabo Flexível 2,5 mm² 750 V — Rolo 100 m',category:'Cabos e fios',price:259.90,oldPrice:289.90,image:'/assets/eletro/uploads/produtos/CAB-FLEX-25-100.svg'},
 {id:2,name:'Cabo Flexível 4 mm² 750 V — Rolo 100 m',category:'Cabos e fios',price:449.90,image:'/assets/eletro/uploads/produtos/CAB-FLEX-40-100.svg'},
 {id:3,name:'Cabo PP 3×1,5 mm² — Rolo 50 m',category:'Cabos e fios',price:329.00,image:'/assets/eletro/uploads/produtos/CAB-PP-3X15-50.svg'},
 {id:4,name:'Disjuntor Monopolar 32 A Curva C',category:'Disjuntores e proteção',price:18.90,image:'/assets/eletro/uploads/produtos/DIS-MONO-32.svg'},
 {id:5,name:'Disjuntor Bipolar 40 A Curva C',category:'Disjuntores e proteção',price:49.90,oldPrice:54.90,image:'/assets/eletro/uploads/produtos/DIS-BI-40.svg'},
 {id:6,name:'Interruptor Diferencial Residual DR 25 A / 30 mA',category:'Disjuntores e proteção',price:189.90,image:'/assets/eletro/uploads/produtos/DR-25-30.svg'},
 {id:7,name:'Protetor de Surto DPS 45 kA — Classe II',category:'Disjuntores e proteção',price:79.90,image:'/assets/eletro/uploads/produtos/DPS-45KA.svg'},
 {id:8,name:'Quadro de Distribuição 12 Disjuntores — Embutir',category:'Quadros e painéis',price:134.90,image:'/assets/eletro/uploads/produtos/QD-12-EMB.svg'},
 {id:9,name:'Quadro de Distribuição 18 Disjuntores — Sobrepor',category:'Quadros e painéis',price:169.90,image:'/assets/eletro/uploads/produtos/QD-18-SOB.svg'},
 {id:10,name:'Lâmpada LED Bulbo 12 W E27 6500 K',category:'Iluminação',price:9.90,oldPrice:12.90,image:'/assets/eletro/uploads/produtos/LED-BULB-12W.svg'},
 {id:11,name:'Painel LED Embutir 18 W Quadrado',category:'Iluminação',price:39.90,image:'/assets/eletro/uploads/produtos/LED-PAN-18.svg'},
 {id:12,name:'Refletor LED 50 W IP66',category:'Iluminação',price:89.90,image:'/assets/eletro/uploads/produtos/LED-REF-50.svg'},
 {id:13,name:'Tomada 2P+T 10 A Padrão NBR 14136',category:'Tomadas e interruptores',price:9.90,image:'/assets/eletro/uploads/produtos/TOM-2P-10A.svg'},
 {id:14,name:'Interruptor Simples 10 A',category:'Tomadas e interruptores',price:8.90,image:'/assets/eletro/uploads/produtos/INT-SIMP.svg'},
 {id:15,name:'Tomada com Carregador USB Duplo 2,1 A',category:'Tomadas e interruptores',price:49.90,image:'/assets/eletro/uploads/produtos/TOM-USB-DUPLA.svg'},
 {id:16,name:'Eletroduto Corrugado 3/4" — Rolo 50 m',category:'Eletrodutos e acessórios',price:69.90,image:'/assets/eletro/uploads/produtos/ELE-COR-34.svg'},
 {id:17,name:'Fita Isolante 19 mm × 20 m',category:'Eletrodutos e acessórios',price:7.90,image:'/assets/eletro/uploads/produtos/ELE-FITA-ISOL.svg'},
 {id:18,name:'Abraçadeira Nylon 200 mm — Pacote 100 un',category:'Eletrodutos e acessórios',price:14.90,image:'/assets/eletro/uploads/produtos/ELE-ABR-200.svg'},
 {id:19,name:'Alicate Universal Isolado 1000 V 8"',category:'Ferramentas',price:59.90,image:'/assets/eletro/uploads/produtos/FER-ALIC-8.svg'},
 {id:20,name:'Kit Ferramentas 6 peças',category:'Ferramentas',price:129.90,image:'/assets/eletro/uploads/produtos/FER-KIT-6.svg'},
 {id:21,name:'Multímetro Digital',category:'Ferramentas',price:99.90,image:'/assets/eletro/uploads/produtos/FER-MULTI.svg'},
 {id:22,name:'Automação Wi-Fi',category:'Automação e energia solar',price:189.90,image:'/assets/eletro/uploads/produtos/AUT-INT-WIFI.svg'},
 {id:23,name:'Microinversor Solar 1500 W',category:'Automação e energia solar',price:1199.90,image:'/assets/eletro/uploads/produtos/SOL-MICRO-15.svg'},
 {id:24,name:'Painel Solar 550 W',category:'Automação e energia solar',price:899.90,image:'/assets/eletro/uploads/produtos/SOL-PAIN-550.svg'},
];

export const studioProducts: Product[] = [
 {id:101,name:'Sketchbook Botânico',category:'Sketchbooks',price:89.90,image:'/assets/studio/img/prod_6ade6804ae175.png',custom:true},
 {id:102,name:'Amigurumi Personalizado',category:'Amigurumis',price:149.90,image:'/assets/studio/img/sem-foto.jpg',custom:true},
 {id:103,name:'Ilustração sob encomenda',category:'Ilustrações',price:119.90,image:'/assets/studio/img/sem-foto.jpg',custom:true},
 {id:104,name:'Caderno artesanal',category:'Sketchbooks',price:69.90,image:'/assets/studio/img/sem-foto.jpg'},
];

export const gelServices: Product[] = [
 {id:201,name:'Instalação Split Inverter',category:'Climatização',price:480},
 {id:202,name:'Higienização Completa',category:'Manutenção',price:150},
 {id:203,name:'Painel Frost One',category:'Automação',price:890},
 {id:204,name:'Manutenção preventiva',category:'Manutenção',price:220},
];
