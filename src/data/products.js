
const vegetables = [
	{ id: 1, name: 'Morot', price: 25, blurb: 'En lång, orange rotsak med grön blast.', description: 'Moroten härstammar från Afghanistan och har odlats i tusentals år. Den är rik på betakaroten och används i allt från soppor till bakverk.' },
	{ id: 2, name: 'Broccoli', price: 35, blurb: 'Ett mörkgrönt huvud med täta blomknoppar på tjock stjälk.', description: 'Broccoli kommer ursprungligen från Italien och har odlats sedan antiken. Den är populär i wok, ångkokt som tillbehör eller rå i sallad.' },
	{ id: 3, name: 'Tomat', price: 30, blurb: 'Rund och röd med saftig, glansig yta.', description: 'Tomaten har sitt ursprung i Sydamerika och kom till Europa på 1500-talet. Den är tekniskt sett en frukt men används nästan alltid som grönsak i matlagning.' },
	{ id: 4, name: 'Gurka', price: 20, blurb: 'Lång och cylindrisk med mörkgrön, slät skal.', description: 'Gurkan odlades ursprungligen i Indien för över 3 000 år sedan. Den består till 95 % av vatten och används ofta rå i sallader och smörgåsar.' },
	{ id: 5, name: 'Paprika', price: 28, blurb: 'Stor, glansig och blockformad i rött, gult eller grönt.', description: 'Paprikan kommer från Centralamerika och introducerades i Europa av Columbus. Den är rik på C-vitamin och passar lika bra rå som tillagad.' },
	{ id: 6, name: 'Lök', price: 15, blurb: 'Rund och gyllenbrun med papperstunt skal.', description: 'Löken har odlats i Mellanöstern i minst 5 000 år och är en av världens mest använda grönsaker. Den utgör smakbasen i otaliga rätter runt om i världen.' },
	{ id: 7, name: 'Potatis', price: 18, blurb: 'Knölig och beige med lite ojämn yta.', description: 'Potatisen kommer från Anderna i Sydamerika och nådde Europa på 1500-talet. Den är idag ett av världens viktigaste livsmedel och lagas på hundratals sätt.' },
	{ id: 8, name: 'Spenat', price: 22, blurb: 'Mörkgröna, ovala och mjuka blad.', description: 'Spenat har sitt ursprung i Persien och spred sig via arabiska handelsmän till Europa under medeltiden. Den är järnrik och används i sallader, pastarätter och smoothies.' },
	{ id: 9, name: 'Blomkål', price: 40, blurb: 'Vitt och tätt huvud omgivet av gröna blad.', description: 'Blomkålen härstammar från Medelhavsområdet och är nära besläktad med broccoli. Den är mångsidig i köket och kan ångkokas, rostas, stekas eller malas till "ris".' },
	{ id: 10, name: 'Zucchini', price: 26, blurb: 'Lång och slät med ljus- eller mörkgrön yta.', description: 'Zucchinin är en variant av squash som förädlades fram i norra Italien på 1800-talet. Den har mild smak och passar utmärkt grillad, stekt eller i gratänger.' },
	{ id: 11, name: 'Äpple', price: 20, blurb: 'Rund frukt med röd eller grön glansig yta.', description: 'Äpplet härstammar från Centralasien och är en av världens äldst odlade frukter. Det finns tusentals sorter och det används i allt från juice till pajer.' },
	{ id: 12, name: 'Päron', price: 25, blurb: 'Droppformad frukt med gul eller grön yta.', description: 'Päronet odlades redan i det antika Kina och Europa för tusentals år sedan. Det är sötare än äpplet och används ofta i desserter, osträtter och sylt.' },
	{ id: 13, name: 'Banan', price: 15, blurb: 'Lång och böjd med gul, tjock skal.', description: 'Bananen odlades ursprungligen i Sydostasien och Papua Nya Guinea. Den är energirik, lätt att ta med sig och en av världens mest konsumerade frukter.' },
	{ id: 14, name: 'Mango', price: 45, blurb: 'Stor och oval med gul-röd yta och gult, saftigt fruktkött.', description: 'Mangon härstammar från södra Asien och har odlats i Indien i över 4 000 år. Den kallas ofta "frukternas konung" och används i desserter, chutneys och smoothies.' },
	{ id: 15, name: 'Ananas', price: 55, blurb: 'Stor och cylindrisk med taggigt, skaligt skal och grön tofs.', description: 'Ananansen kommer från Sydamerika och odlades av urbefolkningar långt innan européerna anlände. Den innehåller enzymet bromelain och används i både söta och salta rätter.' },
	{ id: 16, name: 'Jordgubbe', price: 60, blurb: 'Liten och hjärtformad med röd, glansig yta och små frön.', description: 'Den moderna odlade jordgubben är ett hybriskors som togs fram i Europa på 1700-talet. Den är sommarsymbol i Sverige och används i desserter, sylt och drycker.' },
	{ id: 17, name: 'Blåbär', price: 70, blurb: 'Liten, rund och blålila med matt yta.', description: 'Det vilda blåbäret är infött i norra Europa och Nordamerika och växer i skogar och på myrar. Det är rikt på antioxidanter och används i allt från gröt till kladdkaka.' },
	{ id: 18, name: 'Hallon', price: 65, blurb: 'Litet och konformat med röda, sammansatta drumlingar.', description: 'Hallonbusken är vildväxande i stora delar av Europa och Asien. Hallonen är sötsyrliga, ömtåliga och används i sylt, bakverk och som topping.' },
	{ id: 19, name: 'Vattenmelon', price: 80, blurb: 'Stor och rund med grön randig yta och rött, saftigt kött.', description: 'Vattenmelonen härstammar från tropiska Afrika och odlas idag världen över i varma klimat. Den består till nästan 92 % av vatten och är en populär sommarfrukt.' },
	{ id: 20, name: 'Kiwi', price: 35, blurb: 'Oval med brun, luddig yta och klargrön innanmät.', description: 'Kiwin härstammar från Kina men förädlades kommersiellt i Nya Zeeland på 1900-talet, vilket gav den sitt namn. Den är rik på C-vitamin och äts oftast skalad och skivad.' },
];

/*
const vegetables = [
	{ id: 1, name: 'Morot', price: 25 },
	{ id: 2, name: 'Broccoli', price: 35 },
	{ id: 3, name: 'Tomat', price: 30 },
	{ id: 4, name: 'Gurka', price: 20 },
	{ id: 5, name: 'Paprika', price: 45 },
	{ id: 6, name: 'Lök', price: 15 },
	{ id: 7, name: 'Vitlök', price: 20 },
	{ id: 8, name: 'Potatis', price: 18 },
	{ id: 9, name: 'Spenat', price: 40 },
	{ id: 10, name: 'Blomkål', price: 38 },
	{ id: 11, name: 'Zucchini', price: 28 },
	{ id: 12, name: 'Aubergine', price: 42 },
	{ id: 13, name: 'Selleri', price: 22 },
	{ id: 14, name: 'Purjolök', price: 32 },
	{ id: 15, name: 'Rädisa', price: 18 },
];
*/
export { vegetables }
