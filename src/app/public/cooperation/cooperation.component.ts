import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

export interface Cooperation {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-cooperation',
  standalone: true,
 imports: [
  MatIcon
 ],
  templateUrl: './cooperation.component.html',
  styleUrl: './cooperation.component.scss'
})
export class CooperationComponent {

  cooperations: Cooperation[] = [
    {
      name: 'Úvodní schůzka',
      description: 'Každý úspěšný prodej nemovitosti začíná osobním setkáním se mnou. Během úvodní schůzky se soustředím na vaše potřeby a přání. Dávám důraz na detaily a nabízím odborné poradenství, abychom společně vytvořili pevný základ pro naši úspěšnou spolupráci.',
      image: '/1.jpg'
    },
    {
      name: 'Prohlídka nemovitosti',
      description: 'Prohlídka nemovitosti představuje klíčový krok v procesu prodeje. Během této návštěvy důkladně posuzuji stav a charakteristiky nemovitosti, což nám umožňuje vypracovat účinnou prodejní strategii, včetně jejího ocenění. V případě potřeby může být na prohlídku přizván také odborník, například statik.',
      image: '/2.jpg'
    },
    {
      name: 'Příprava nemovitosti',
      description: 'Příprava nemovitosti na prodej hraje zásadní roli při vytváření pozitivního prvního dojmu. Nabízím široké spektrum služeb, jako je home staging, menší opravy a úklid, abych zajistil, že vaše nemovitost bude vypadat co nejlépe a přitáhne pozornost potenciálních zájemců.',
      image: '/3.jpg'
    } ,
   {
      name: 'Marketingový balíček',
      description: 'Moje marketingové strategie jsou přizpůsobeny specifikům vaší nemovitosti a zahrnují rozmanité nástroje, jako jsou profesionální fotografie, videa, kvalitní texty, online reklama, inzerce na specializovaných portálech a prezentace na sociálních sítích. Mým cílem je co nejvíce zvýšit viditelnost vaší nemovitosti.',
      image: '/4.jpg'
    },{
      name: 'Prohlídky nemovitosti',
      description: 'Zajišťuji a koordinuji prohlídky nemovitosti pro potenciální zájemce, přičemž se zaměřuji na flexibilitu a pohodlí jak prodávajících, tak návštěvníků. Prohlídky jsou vedeny profesionálně a slouží jako příležitost představit nemovitost v tom nejlepším světle. Po každé prohlídce je vypracován podrobný report.',
      image: '/5.jpg'
    },{
      name: 'Reporting',
      description: 'Budu vás pravidelně informovat o pokroku prodeje vaší nemovitosti. Zprávy budou obsahovat aktualizace o marketingových aktivitách, zpětnou vazbu z prohlídek a doporučení pro další kroky. Nejhorší je, když nemáte přehled o tom, co se s vaší nemovitostí děje.',
      image: '/6.jpg'
    },
   {
    name: 'Právní servis',
    description: 'Postaráme se o veškerou potřebnou smluvní dokumentaci, včetně zajištění advokátní úschovy. Tento proces zajistí, že všechny právní aspekty prodeje budou správně ošetřeny a vaše zájmy budou chráněny. Můžete se tak plně soustředit na další kroky, zatímco my se postaráme o administrativní záležitosti.',
    image: '/7.jpg'
   },   {
    name: 'Předání nemovitosti',
    description: 'Konečné předání nemovitosti představuje klíčový okamžik, který znamená úspěšné dokončení dohody. Postarám se o to, aby všechny dokumenty byly řádně připraveny a samotné předání proběhlo bez problémů, s důrazem na jistotu a spokojenost obou stran. V případě potřeby také zajistím převod energií a další související záležitosti.',
    image: '/8.jpg'
   },
  ];


}
