const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'bangkok-brand',
    tag: 'varlden',
    tagLabel: 'Världen',
    time: '4 tim sedan',
    img: '/images/bangkok.jpg',
    title: 'Minst 27 döda efter brand på pub i Bangkok — 63 skadade',
    ingress: 'En våldsam brand bröt ut på en nattklubb i Bangkoks Chatuchak-distrikt vid midnatt lokal tid. Minst 27 personer har omkommit och 63 skadats, varav 22 är i kritiskt tillstånd.',
    body: `<p>Branden startade vid midnatt, natten till måndag, lokal tid i ett populärt nöjesdistrikt i norra Bangkok. Lågor slog ut från puben samtidigt som panikslagna gäster försökte fly ut genom rökfyllda lokaler. Vit tjock rök steg mot himlen när räddningstjänsten anlände till platsen.</p>
<p>Händelseförloppet gick mycket snabbt och det var redan en kraftig brand när räddningstjänsten kom fram, enligt myndigheter på plats. Bilder inifrån puben visar en totalt utbränd lokal med sönderslagna fönster och förkolnade inredningsdetaljer.</p>
<p>Enligt Thailands premiärminister Anutin Charnvirakul hittades många av de döda kropparna inne vid toaletterna längst in i lokalen, dit många flytt i hopp om att undkomma lågorna. 63 personer är skadade varav 22 i kritiskt tillstånd, uppger Bangkoks guvernör.</p>
<p>Brandorsaken är ännu oklar. Utredare undersöker flera teorier, inklusive möjliga elektriska fel eller en olycka i köket. Thailand har en historia av allvarliga nattklubbsbränder — 2022 dog 14 personer i en pubbrand i den östra delen av landet.</p>
<p>Svenska UD säger att man inte känner till att några svenskar finns bland de skadade eller omkomna. Området är inget typiskt turistområde, vilket minskar risken för svenska offer. Myndigheterna i Bangkok har inlett en omfattande utredning av händelsen.</p>`,
    kalla: 'Källa: SVT Nyheter, BBC News, Reuters'
  },
  {
    slug: 'us-iran-hormuz',
    tag: 'varlden',
    tagLabel: 'Världen',
    time: '1 tim sedan',
    img: '/images/usIran.jpg',
    title: 'USA och Iran beskjuter varandra — spänningen ökar kring Hormuzsundet',
    ingress: 'USA genomförde under söndagen nya attacker mot iranska militära mål, vilket besvarades av Iran med attacker mot amerikanska baser i Kuwait, Jordanien och Bahrain. Oljepriset steg med över 4 procent.',
    body: `<p>Under söndagskvällen meddelade USA:s centralkommando Centcom att nya attacker genomförts mot Iran, med start klockan 17:00 ET (23:00 svensk tid). Dussintals iranska militära mål, inklusive luftförsvarssystem, kustradarstationer och robot- och drönarkapaciteter, träffades.</p>
<p>Inom några timmar svarade Irans revolutionsgarde (IRGC) med omfattande attacker mot USA:s militära baser i Kuwait, Jordanien och Bahrain. Iransk statlig media rapporterade att minst en person dödades i sydvästra Iran och fyra skadades.</p>
<p>De eskalerande attackerna kastar nu tvivel över framtiden för det interimistiska avtal som USA och Iran undertecknade i juni, vilket syftade till att återöppna Hormuzsundet (det strategiska sund mellan Persiska viken och Omanbukten som 20 procent av världens olja transporteras genom) och på sikt få ett slut på konflikten.</p>
<p>Iran hävdar att sundet är stängt tills vidare medan USA insisterar på att det är öppet. Oljepriset steg kraftigt på måndagsmorgonen i Asien — Brentoljan (en referensolja för världsmarknadspriset) gick upp 4,3 procent till 79,26 dollar per fat, medan USA-noterad olja steg lika mycket till 74,50 dollar.</p>
<p>USA:s president Donald Trump har förklarat att vapenvilan är över efter Irans attacker, medan Irans utrikesminister Abbas Araghchi anklagar USA för att ha brutit mot avtalet. Samtidigt uppger Trump att samtalen fortsätter och medlare försöker återupprätta processen.</p>`,
    kalla: 'Källa: BBC News, Reuters'
  },
  {
    slug: 'paris-skogsbrand',
    tag: 'varlden',
    tagLabel: 'Världen',
    time: '2 tim sedan',
    img: '/images/parisFire.jpg',
    title: 'Brandflygplan sätts in mot "exceptionell" skogsbrand nära Paris',
    ingress: 'Två brandflygplan har satts in för att bekämpa en stor skogsbrand i Fontainebleau-skogen söder om Paris. Branden har redan härjat 800 hektar och tvingat fram delvis avstängning av motorvägar och tågtrafik.',
    body: `<p>Fontainebleauskogen, ett av Frankrikes mest kända naturområden omkring 6 mil sydost om Paris, brinner med en intensitet som beskrivs som "exceptionell" av franska myndigheter. Det är första gången som brandflygplan från södra Frankrike skickats till Parisregionen för att bekämpa bränder.</p>
<p>Två brandflygplan, två brandhelikoptrar och ett observationsflygplan har satts in sedan söndagen, enligt Eric Brocardi vid Frankrikes nationella brandmansförbund. "Målet är att rädda liv och egendom", sade han.</p>
<p>Branden har delvis stängt av landets huvudsakliga motorväg mellan norr och söder, vilket skapat trafikkaos under årets första stora sommarhelgutflyttning. En höghastighetståglinje till södra Frankrike har också påverkats, med förseningar på upp till sex timmar vid Paris Gare de Lyon.</p>
<p>Parisregionen lider för närvarande av sin tredje värmebölja (en period med ovanligt höga temperaturer som varar flera dagar) i år, vilket är en del av ett Europaomfattande mönster av extremvärme. Rekordtemperaturer har slagits i flera länder denna sommar.</p>
<p>Värmeböljan har också tvingat fram tillfällig stängning av tre kärnkraftverk för att undvika att släppa ut för varmt kylvatten i redan överhettade vattendrag. Detta efter en av de dödligaste skogsbränderna i Spanien någonsin då 13 personer omkom i Almería-provinsen förra veckan.</p>`,
    kalla: 'Källa: BBC News, AFP'
  },
  {
    slug: 'emp-bomb-sverige',
    tag: 'sverige',
    tagLabel: 'Sverige',
    time: '',
    img: '/images/emp.jpg',
    title: 'Osynliga bomben som kan slå ut Sverige — Hesa Fredrik skulle tystna',
    ingress: 'En EMP-bomb (Electromagnetic Pulse — en elektromagnetisk puls) som detoneras ovanför atmosfären skulle slå ut stora delar av Sveriges elförsörjning och elektronik. Nu varnar FOI och MSB för att hotet har ökat dramatiskt.',
    body: `<p>I takt med att världens kärnvapenarsenaler moderniseras blir hotet från så kallade EMP-bomber allt mer aktuellt. En EMP-bomb är ett kärnvapen som detoneras på hög höjd, långt ovanför atmosfären. Istället för att döda människor direkt genom tryckvåg och strålning skapar den en enorm elektromagnetisk puls som slår ut all oskyddad elektronik över ett mycket stort område.</p>
<p>"Vi märker jättestor skillnad sedan Ukrainakriget", säger Fredrik Nielsen, forskare på EMP vid Försvarets forskningsinstitut (FOI). Hotbilden har förändrats dramatiskt och Sverige betraktas nu som ett möjligt mål för en sådan attack.</p>
<p>Om en EMP-bomb detonerades över Sverige skulle en stor del av strömförsörjningen och elektroniken slås ut, enligt Myndigheten för civilt försvar (MSB). Transporter och kommunikationer skulle försvåras allvarligt. Inte ens varningssystemet "Hesa Fredrik" skulle klara sig — det är helt beroende av fungerande elektronik.</p>
<p>"Det skulle bli en enorm påverkan på samhället. Vi skulle få problem med att använda flyglarm", säger Henrik Larsson, tillförordnad chef för avdelningen för befolkningsskydd på MSB. Han konstaterar att även om skyddsrummen är EMP-säkra skulle evakueringar bli mycket svåra utan fungerande kommunikation.</p>
<p>Försvarets materielverk (FMV) har en unik anläggning som kan skapa en elektromagnetisk puls med atombombs styrka för att testa skyddsanordningar. "Vi kör stridsvagnar, hjulfordon, kanoner och ammunitionslådor", säger Andreas Näslund, provledare på anläggningen.</p>
<p>Under 1980-talet trodde försvarsplanerare att Sverige inte var ett primärt mål, men kunde drabbas av störningar -- det så kallade "åskådarfallet". Den bilden har ändrats radikalt. "Uppfattningen nu är att Sverige skulle kunna vara ett mål för en sådan här attack", säger Fredrik Nielsen på FOI.</p>`,
    kalla: 'Källa: SVT Nyheter'
  },
  {
    slug: 'als-behandling-anna',
    tag: 'sverige',
    tagLabel: 'Sverige',
    time: '',
    img: '/images/als.jpg',
    title: 'ALS-sjuka småbarnsmamman Anna i Luleå beviljas dyr behandling',
    ingress: 'Efter en egenstartad insamling och en omprövning av NT-rådet (Rådet för nya terapier — en expertgrupp som ger råd till regionerna om nya läkemedel) får Anna Furbeck i Luleå den dyra ALS-medicinen Qalsody på hemmaplan från augusti.',
    body: `<p>Anna Furbeck är småbarnsmamma och lider av ALS (Amyotrofisk lateralskleros — en allvarlig nervsjukdom som successivt förstör nerverna som styr musklerna, vilket leder till muskelsvaghet, talsvårigheter och så småningom andningssvikt). Hon har en mutation i SOD1-genen, vilket är en ovanlig variant av sjukdomen som drabbar en mindre grupp patienter.</p>
<p>Läkemedlet Qalsody med den aktiva substansen Tofersen kostar omkring en kvarts miljon kronor per dos. Det svenska NT-rådet hade tidigare avrått regionerna från användning med hänvisning till det höga priset och att effekten inte var tillräckligt bevisad.</p>
<p>Med hjälp av en egenstartad insamling har Anna Furbeck kunnat få de första doserna i Tyskland. Men nu har NT-rådet omprövat sitt beslut och från och med augusti kan hon få medicinen på hemmaplan vid Sunderbyns sjukhus. "Det kommer betyda jättemycket. Vi kommer kunna vara mer med våra barn", säger Anna.</p>
<p>NT-rådets nya rekommendation innebär att Qalsody kan användas efter samråd med NT-rådets behandlingsråd för ALS-patienter med påvisad SOD1-mutation och snabbt progredierande sjukdomsförlopp (sjukdom som förvärras i snabb takt). Behandlingen ska registreras och följas upp i Svenska Neuroregistret.</p>
<p>Ungefär 400 personer i Sverige insjuknar i ALS varje år, de flesta mellan 45 och 75 år. Stefan Stridsman, verksamhetsområdeschef på Neurologcentrum, uppger att det sannolikt rör sig om ett fåtal patienter som kommer att kunna få den aktuella behandlingen.</p>`,
    kalla: 'Källa: SVT Nyheter'
  },
  {
    slug: 'trafikverket-jo-granskning',
    tag: 'sverige',
    tagLabel: 'Sverige',
    time: '',
    img: '/images/traffic.jpg',
    title: 'Familjens uppfart till sommarhuset spärrades av — utan förvarning',
    ingress: 'När Anna-Carin Moberg och hennes sambo skulle åka till sin sommarstuga i Hålta utanför Kungälv möttes de av en avspärrad uppfart. Trafikverket hade satt upp ett skyddsräcke mitt framför infarten. Nu granskas myndigheten av JO.',
    body: `<p>Det var i november som Anna-Carin Moberg och hennes sambo för första gången såg att uppfarten till deras sommarhus i Hålta, utanför Kungälv, hade spärrats av. Trafikverket hade utan förvarning satt upp ett skyddsräcke som blockerade bilinfarten till fastigheten.</p>
<p>Sommarstugan har ägts av familjen i över 80 år och de hänvisar till ett officialservitut (en officiell rättighet som är knuten till en fastighet) från 1945, som ger fastigheten rätt till en väganslutning. SVT har tagit del av dokumenten. "Vårt officialservitut är inte dödat. Det är fullt levande och giltigt", säger Anna-Carin Moberg.</p>
<p>Det nya skyddsräcket påverkade sophämtning och slamtömning. Efter en ansökan om särskild handräckning hos Kronofogden tog Trafikverket bort en del av räcket — men lämnade bara en smal öppning för gående och cyklister.</p>
<p>"Tänk dig själv att du har ett hus och du kan inte köra bil till huset", säger Anna-Carin Moberg, som först vände sig till andra myndigheter för att kontrollera om hon själv gjort något fel. Hon hade inte det.</p>
<p>Familjen vände sig till Justitieombudsmannen (JO — en oberoende myndighet som granskar hur offentliga myndigheter sköter sitt jobb), som har beslutat att granska Trafikverkets hantering av ärendet. Trafikverket hänvisar till den pågående granskningen och vill inte kommentera ärendet.</p>`,
    kalla: 'Källa: SVT Nyheter'
  },
  {
    slug: 'spacex-ras-ipo',
    tag: 'ekonomi',
    tagLabel: 'Ekonomi',
    time: '1 tim sedan',
    img: '/images/spacex.jpg',
    title: 'SpaceX-aktien rasar — en månad efter rekordnoteringen',
    ingress: 'Elon Musks rymdbolag SpaceX noterades på börsen den 12 juni i den största IPO:n (Initial Public Offering — första gången ett företag säljer aktier till allmänheten) någonsin. En månad senare har aktien rasat 35 procent från toppen och investerare som köpte i början förlorar pengar.',
    body: `<p>När SpaceX-aktien för första gången blev tillgänglig för allmänheten på New York-börsen den 12 juni var intresset enormt. Bolaget prissatte aktien till 135 dollar, men på första handelsdagen steg den omedelbart till 150, fortsatte till 176 och stängde på 160,95 dollar.</p>
<p>Den följande veckan fortsatte aktien upp till en intraday-topp på 225 dollar, vilket innebar att SpaceX passerade både Amazon och Microsoft i totalt marknadsvärde. Det var den största IPO:n genom tiderna.</p>
<p>Entusiasmen kring SpaceX handlade till stor del om AI (Artificiell Intelligens). SpaceX hade tidigare i år förvärvat Elon Musks AI-startup xAI, som nyligen bytt namn till SpaceXAI och är mest känd för chatbotten Grok. Bolaget hade också börjat hyra ut datorkapacitet till andra teknikföretag.</p>
<p>Men verkligheten har börjat sjunka in. SpaceX huvudsakliga verksamhet är rakettillverkning och satellitkommunikation via Starlink (ett nätverk av tusentals små satelliter som ger internetuppkoppling över hela jorden). När Starlink sade sig sänka priser i Memphis, Tennessee, föll aktien 8 procent på en dag.</p>
<p>Vid slutet av första månaden handlades aktien runt 145 dollar — 35 procent lägre än toppen. "Om du köpte under de första fem dagarna är du definitivt under vatten" (förlorar pengar på din investering), säger Keith Snyder, analytiker på investmentforskningsföretaget CFRA. Han beskriver utvecklingen som "meme stock-liknande" (en aktie som drivs av sociala medier-entusiasm snarare än fundamental analys).</p>
<p>Trots nedgången har Morgan Stanley satt ett målpris på 300 dollar per aktie. SpaceX första publika kvartalsrapport väntas i början av augusti, vilket sammanfaller med att anställda för första gången kan sälja sina aktier på öppna marknaden.</p>`,
    kalla: 'Källa: BBC News'
  },
  {
    slug: 'gibraltar-grans-bort',
    tag: 'ekonomi',
    tagLabel: 'Ekonomi',
    time: '7 tim sedan',
    img: '/images/gibraltar.jpg',
    title: 'Ny era för Gibraltar — 118-åriga gränskontroller med Spanien tas bort',
    ingress: 'Den 15 juli tas gränskontrollerna mellan Spanien och Gibraltar bort efter över 118 år. För de 15 000 spanjorer som dagligen pendlar till det brittiska territoriet innebär det slutet på långa köer och en ny ekonomisk era.',
    body: `<p>Varje vardagsmorgon cyklar Shilpi Chotrani från sitt hem i den spanska staden La Línea de la Concepción till Gibraltar. Det är en kort resa, men den innebär att hon måste passera en internationell gräns. Under rusningstid kan köerna bli långa när omkring 15 000 spanjorer som arbetar i territoriet korsar gränsen.</p>
<p>"Det faktum att det finns en gräns mellan oss är löjligt", säger Chotrani, som arbetar med HR i ett gibraltiskt rederi- och turismföretag. "Jag tycker inte att ett staket borde skilja människor åt."</p>
<p>Gibraltar, ett brittiskt utomeuropeiskt territorium med omkring 40 000 invånare på den södra spetsen av Iberiska halvön, har haft en gränshägnad sedan 1908. Platsen har genom historien varit skådeplats för militära slag, suveränitetstvister och en 13-årig blockad som infördes av Spaniens diktator Francisco Franco 1969.</p>
<p>Men från och med den 15 juli avlägsnas gränskontrollerna som en del av ett avtal mellan EU och Storbritannien efter brexit. Gibraltar ansluter sig till EU:s tullunion och Schengens fria reszon (samarbetet som möjliggör resor utan passkontroll mellan de flesta EU-länder). "Det här är något historiskt", säger Juan Franco, borgmästare i La Línea de la Concepción.</p>
<p>Gibraltar har en av världens högsta inkomster per capita, medan La Línea och närliggande områden är bland de fattigaste i Spanien med en arbetslöshet nära 30 procent. Förhoppningen är att den fria rörligheten ska ge ett ekonomiskt lyft. "För ett genomsnittligt företag i den här staden kommer en tredjedel av intäkterna från kunder i Gibraltar", säger Franco.</p>
<p>Gibraltars försteminister Fabian Picardo beskriver överenskommelsen som "en enorm förändring" och "fullständig flytande rörlighet för människor och varor". Den största ekonomiska fördelen väntas bli en ökning av antalet besökare när kön vid gränsen försvinner.</p>`,
    kalla: 'Källa: BBC News'
  },
  {
    slug: 'sinner-wimbledon',
    tag: 'sport',
    tagLabel: 'Sport',
    time: '',
    img: '/images/sinner.jpg',
    title: 'Jannik Sinner försvarar sin titel — vinner Wimbledon igen',
    ingress: 'Italienske världsettan Jannik Sinner besegrade Alexander Zverev i en femsetare i Wimbledons herrfinal och tog sin femte Grand Slam-titel (de fyra största tennisturneringarna: Australiska öppna, Franska öppna, Wimbledon och US Open).',
    body: `<p>I en tät och dramatisk final på Centre Court i London kom Jannik Sinner tillbaka från att ha förlorat första set och besegrade Alexander Zverev med 3-1 i set efter tre timmar och 46 minuters spel. Sinner blev därmed den tionde mannen i Open era (professionella tennisen sedan 1968) att försvara sin Wimbledon-titel.</p>
<p>Matchen innehöll en avgörande poäng som sammanfattade Sinners resa: i tredje set, med chans att bryta Zverevs serve, föll han till marken mitt i en bollväxling, reste sig upp och tvingade fram ett misstag av Zverev — det första serveskiftet (när mottagaren vinner ett game mot servaren) på nästan tre timmar.</p>
<p>Sinners väg till titeln var långt ifrån enkel. Bara en månad efter en chockartad förlust i Franska öppna, där han förlorade från 2-0 i set och 5-1 i tredje set, var han tillbaka. Han undvek med nöd och näppe att bli den tredje försvarande Wimbledon-mästaren att åka ut i första rundan genom att vända ett 0-2-underläge mot Miomir Kecmanovic.</p>
<p>Därefter dominerade Sinner totalt och förlorade inte ett enda set på vägen till finalen. I semifinalen krossade han 24-faldige Grand Slam-mästaren Novak Djokovic på bara 2 timmar och 20 minuter — han mötte bara en enda breakboll (en poäng som ger mottagaren chans att vinna game).</p>
<p>"Den här titeln betyder mycket eftersom det var tufft efter Paris, igen", sade Sinner efter matchen. Hans tränare Darren Cahill sade: "Det har funnits några sparkar i magen längs vägen. Tuffa förluster. Det som gör oss mest stolta är sättet han kommer tillbaka på."</p>`,
    kalla: 'Källa: BBC Sport, SVT Sport'
  },
  {
    slug: 'tyfon-bavi-kina',
    tag: 'fritt',
    tagLabel: 'Miljö',
    time: '23 tim sedan',
    img: '/images/typhoon.jpg',
    title: 'Tyfonen Bavi: Nästan 2 miljoner människor evakuerade i Kina',
    ingress: 'En kraftfull tyfon (en tropisk cyklon i Stilla havet — ett enormt oväder med vindhastigheter på över 290 km/h) har dragit in över Kinas Zhejiang-provins. Närmare 2 miljoner människor har evakuerats, flyg och tåg har ställts in och skolor har stängts.',
    body: `<p>Tyfonen Bavi, som var en supertyfon med vindhastigheter på 290 km/h när den drog fram över Guam och Nordmarianerna förra måndagen, försvagades något till 144 km/h innan den nådde Kinas fastland. Men kraften är fortfarande farlig, främst på grund av de enorma regnmängderna i stormens regnband.</p>
<p>På söndagsmorgonen nådde tyfonens centrum Hangzhou, huvudstaden i Zhejiang-provinsen. Myndigheterna beordrade evakuering av över 1,7 miljoner människor i Zhejiang och tusentals fler i angränsande provinser. Skolor, arbetsplatser och utomhusaktiviteter har stängts, 400 flyg och dussintals tåg har ställts in.</p>
<p>Staden Wenzhou med omkring 10 miljoner invånare ligger nära stormens bana och myndigheterna har evakuerat hundratusentals boende. "Vi kunde höra takpannor och trädgrenar falla", berättar Li Liangxing, en boende i staden, för Reuters. "Så klart var vi rädda."</p>
<p>Innan Bavi nådde Kina hade den piskat en kedja av avlägsna japanska öar och svept förbi norra Taiwan med kraftiga regn. Minst 17 personer har dödats i jordskred (massor av jord och sten som glider nerför en sluttning) i Filippinerna utlösta av stormen.</p>
<p>Stormen förväntas röra sig nordväst och nå Anhui-provinsen under måndagen och Shandonghalvön på tisdag. Delar av södra Kina återhämtar sig fortfarande från förra veckans tyfon Maysak som dödade 39 personer och orsakade enorma jordbruksförluster, samt två sällsynta tornadoer (en kraftfull roterande luftpelare) i Hubei-provinsen.</p>`,
    kalla: 'Källa: BBC News'
  },
  {
    slug: 'lindsey-graham-dod',
    tag: 'fritt',
    tagLabel: 'USA',
    time: '8 tim sedan',
    img: '/images/graham.jpg',
    title: 'Lindsey Graham död — senatorn och Trump-allierade blev 71 år',
    ingress: 'Den amerikanske senatorn Lindsey Graham från South Carolina har avlidit efter en kort tids sjukdom. Enligt hans kansli orsakades döden av ett brustet aortaaneurysm (en bristning av kroppens största pulsåder). Donald Trump kallar honom en "sann amerikansk patriot".',
    body: `<p>Lindsey Graham, 71, avled under lördagskvällen efter en "kort och plötslig sjukdom", enligt hans kansli. Den republikanske senatorn, som suttit i USA:s senat sedan 2002, var en av Washingtons mest inflytelserika röster i utrikespolitik och ofta pådrivande för militär intervention utomlands.</p>
<p>Rättsläkarens preliminära undersökning visar att dödsorsaken var ett brustet aortaaneurysm (en bristning i kroppens största artär, som löper från hjärtat och ner genom bröst- och bukhålan). Graham hade just återvänt från Kiev där han träffade Ukrainas president Volodymyr Zelensky på fredagen — inga kända hälsoproblem fanns före resan.</p>
<p>President Donald Trump sade till NBC News att han talat med Graham timmarna före hans död och att senatorn "lät bra" men lite trött. "Han var en tuff typ på många sätt", sade Trump. "Om han ville få något gjort, om han trodde att han hade rätt och hade människor emot sig, kunde han vara väldigt tuff."</p>
<p>Grahams politiska resa var anmärkningsvärd. Han var ursprungligen en högljudd kritiker av Donald Trump och kallade honom 2015 för en "rashetsande, främlingsfientlig, religiös bigot". Efter stormningen av Kapitolium 2021 sade han "räkna ut mig, nog är nog". Men över tid mjuknade hans ton och han röstade för att frikänna Trump i riksrätten 2021 och stödde hans presidentkampanj 2024.</p>
<p>Graham var känd för sin interventionistiska utrikespolitik med starkt stöd för Israel och kriget mot Iran. I en av sina sitta TV-intervjuer sade han förra månaden att USA skulle "utplåna" Iran om landet inte underkastade sig USA:s kontroll över Hormuzsundet. Israels premiärminister Benjamin Netanyahu sade att "Israel har förlorat en av sina största vänner".</p>
<p>South Carolinas guvernör Henry McMaster har nu befogenhet att utse en tillfällig ersättare för Graham till dess att hans mandatperiod löper ut i januari. En efterträdare kommer att väljas i november mellanårsval. Grahams död innebär att republikanernas majoritet i senaten minskar från 53-47 till 52-47.</p>`,
    kalla: 'Källa: BBC News, NBC News'
  },
  {
    slug: 'bangladesh-skyfall',
    tag: 'fritt',
    tagLabel: 'Miljö',
    time: '',
    img: '/images/bangladesh.jpg',
    title: 'Kraftiga skyfall i Bangladesh — minst 50 döda och 35 000 hemlösa',
    ingress: 'Det årstidsbundna monsunregnet (kraftiga regn som under sommaren drabbar södra och sydöstra Asien) har orsakat massiva översvämningar och jordskred i Bangladesh. Minst 50 personer har dött och över 35 000 människor har tvingats lämna sina hem.',
    body: `<p>De kraftiga skyfallen har under den senaste veckan slagit hårt mot distriktet Chittagong i sydöstra Bangladesh. Myndigheterna rapporterar att över 50 personer har omkommit och att tusentals är hemlösa till följd av översvämningar och jordskred (när vattenmättad jord och stenmassor glider nerför bergsslutningar).</p>
<p>Monsunregnen, som normalt pågår från juni till september, har varit extremt kraftfulla i år. Omkring 35 000 människor har sökt skydd i tillfälliga evakueringscenter. Samtidigt varnar myndigheterna för brist på mat och rent dricksvatten i de drabbade områdena, vilket ökar risken för vattenburna sjukdomar som kolera och diarré.</p>
<p>Sarder Udoy Raihan vid centret för översvämningsprognoser och varningar säger till nyhetsbyrån AFP att även de nordöstra och norra delarna av Bangladesh löper risk för kraftiga skyfall och översvämningar under de kommande dagarna. Vattennivåerna i flera floder har redan nått farliga nivåer.</p>
<p>Bangladesh är ett av de länder i världen som är mest utsatt för effekterna av klimatförändringarna. Landet är ett låglänt deltaområde där flera stora floder, inklusive Ganges och Brahmaputra, rinner ut i Bengaliska viken. Varje år drabbas miljontals människor av monsunrelaterade översvämningar.</p>
<p>Forskare varnar för att extremväder som detta kommer att bli allt vanligare när den globala medeltemperaturen stiger. För Bangladesh, med sina 170 miljoner invånare varav många bor i utsatta låglänta områden, innebär det en existentiell utmaning för samhället och ekonomin.</p>`,
    kalla: 'Källa: SVT Nyheter, AFP'
  }
];

const tagColors = {
  varlden: { bg: '#e8f5e9', fg: '#2e7d32' },
  sverige: { bg: '#fff3e0', fg: '#e65100' },
  ekonomi: { bg: '#fce4ec', fg: '#c62828' },
  sport: { bg: '#e8eaf6', fg: '#283593' },
  kultur: { bg: '#f3e5f5', fg: '#7b1fa2' },
  fritt: { bg: '#e0f2f1', fg: '#00695c' }
};

const sharedCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #222; }
header {
  background: #fff;
  color: #222; padding: 40px 0; text-align: center;
  position: relative; overflow: hidden;
  border-bottom: 3px solid #1a6bff;
}
header .thor-bg {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  height: 120px; opacity: 0.25;
  pointer-events: none; z-index: 1;
}
header h1 { position: relative; z-index: 2; display: inline-block; font-size: 42px; font-weight: 800; letter-spacing: -0.5px; }
header h1 span { color: #1a6bff; }
header p.sub { color: #888; font-size: 14px; margin-top: 6px; position: relative; z-index: 2; }
.container { max-width: 760px; margin: 0 auto; padding: 20px 16px; }
.date-badge { text-align: center; margin-bottom: 24px; }
.date-badge span { background: #eee; padding: 6px 16px; border-radius: 20px; font-size: 14px; color: #666; }
.article-card {
  display: block; text-decoration: none; color: inherit;
  background: #fff; border-radius: 14px; margin-bottom: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08); overflow: hidden;
  transition: box-shadow 0.2s;
}
.article-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
.article-card img.thumb { width: 100%; height: 220px; object-fit: cover; display: block; background: #e0e0e0; }
.article-card .preview { padding: 18px 22px; }
.article-card .preview h2 { font-size: 21px; font-weight: 700; margin-bottom: 4px; line-height: 1.3; }
.article-card .preview p.ingress { color: #555; font-size: 14.5px; line-height: 1.5; margin-top: 8px; }
.meta { font-size: 13px; color: #888; display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 6px; }
.tag { padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; display: inline-block; }
.article-card.expanded .content { display: block; }
footer { text-align: center; padding: 30px 16px; color: #999; font-size: 13px; }
footer a { color: #666; text-decoration: none; }
@media (max-width: 480px) {
  .container { padding: 12px 10px; }
  .article-card .preview { padding: 14px 16px; }
}`;

const articleCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #222; }
.article-page { max-width: 900px; margin: 0 auto; padding: 20px 24px; }
header {
  background: #fff;
  color: #222; padding: 40px 0; text-align: center;
  position: relative; overflow: hidden;
  border-bottom: 3px solid #1a6bff;
}
header .thor-bg {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  height: 120px; opacity: 0.25;
  pointer-events: none; z-index: 1;
}
header h1 { position: relative; z-index: 2; display: inline-block; font-size: 42px; font-weight: 800; letter-spacing: -0.5px; }
header h1 span { color: #1a6bff; }
header p.sub { color: #999; font-size: 14px; margin-top: 6px; position: relative; z-index: 2; }
.back-link { display: inline-block; margin-bottom: 20px; color: #333; text-decoration: none; font-weight: 500; font-size: 15px; }
.back-link:hover { text-decoration: underline; }
.article-page img.hero { width: 100%; max-height: 500px; object-fit: cover; border-radius: 14px; margin-bottom: 20px; }
.article-page h1 { font-size: 36px; line-height: 1.2; margin-bottom: 12px; }
.article-page .meta { font-size: 14px; color: #888; margin-bottom: 20px; }
.article-page .content { font-size: 18px; line-height: 1.7; }
.article-page .content p { margin-bottom: 18px; }
.article-page .kalla { font-size: 13px; color: #999; border-top: 1px solid #ddd; padding-top: 14px; margin-top: 24px; }
.tag { padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; display: inline-block; margin-bottom: 12px; }
@media (max-width: 600px) {
  .article-page h1 { font-size: 26px; } .article-page .content { font-size: 16px; }
  .article-page { padding: 12px; }
}
.lightbox { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); z-index:9999; cursor:zoom-out; overflow:auto; }
.lightbox img { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); max-width:95%; max-height:95%; object-fit:contain; border-radius:4px; }
.lightbox .close-lb { position:fixed; top:16px; right:20px; color:#fff; font-size:36px; cursor:pointer; z-index:10000; line-height:1; opacity:0.8; }
.lightbox .close-lb:hover { opacity:1; }`;

function tagStyle(tag) {
  const c = tagColors[tag] || { bg: '#e0e0e0', fg: '#666' };
  return `style="background:${c.bg};color:${c.fg}"`;
}

function tagClass(tag) {
  return `tag ${tag}`;
}

// Generate main index
function genIndex() {
  let cards = articles.map((a, i) => {
    const meta = a.time ? `<span>${a.time}</span>` : '';
    return `
<a href="/artikel/${a.slug}" class="article-card">
  <img class="thumb" src="${a.img}" alt="${a.title}" loading="lazy">
  <div class="preview">
    <div class="meta"><span class="${tagClass(a.tag)}">${a.tagLabel}</span>${meta}</div>
    <h2>${a.title}</h2>
    <p class="ingress">${a.ingress}</p>
  </div>
</a>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/images/thor-icon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>thor12news — 12 nyheter måndag 13 juli 2026</title>
  <style>${sharedCSS}</style>
</head>
<body>
<header>
  <img src="/images/thor-icon.png" class="thor-bg" alt="">
  <h1><span>thor</span>12news</h1>
  <p class="sub">12 nyheter varje dag — måndag 13 juli 2026</p>
</header>
<div class="container">
<div class="date-badge"><span>📅 Måndag 13 juli 2026 · 12 artiklar</span></div>
${cards}
</div>
<footer id="main-footer">
  <p>thor12news — 12 nyheter varje dag · 13 juli 2026</p>
  <div id="download-buttons" style="margin-top:14px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
    <a href="/thor12news/thor12news.apk" style="display:inline-block;background:#1a6bff;color:#fff;padding:8px 18px;border-radius:10px;text-decoration:none;font-size:13px;font-weight:600;">📱 Ladda ner för Android</a>
    <a href="#" onclick="alert('Öppna thor12news i Safari, tryck på Dela-knappen (📤) och välj \'Lägg till på hemskärmen\' — då funkar det som en app!')" style="display:inline-block;background:#333;color:#fff;padding:8px 18px;border-radius:10px;text-decoration:none;font-size:13px;font-weight:600;">🍏 Ladda ner för iOS</a>
  </div>
  <p style="margin-top:10px;font-size:11px;">Sammanställd av abot 🤖</p>
</footer>
<script>
  // Hide download buttons when inside the thor12news Android app
  if (navigator.userAgent.indexOf('thor12news-app') > -1) {
    document.getElementById('download-buttons').style.display = 'none';
  }
</script>
</body>
</html>`;
  fs.writeFileSync('docs/index.html', html);
  console.log('✅ docs/index.html');
}

// Generate individual article pages
function genArticles() {
  articles.forEach(a => {
    const html = `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/images/thor-icon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a.title} — thor12news</title>
  <style>${articleCSS}</style>
</head>
<body>
<header>
  <a href="/"><img src="/images/thor-icon.png" class="thor-bg" alt=""></a>
  <a href="/" style="text-decoration:none;color:inherit;"><h1><span>thor</span>12news</h1></a>
</header>
<div class="article-page">
  <a href="/" class="back-link">← Tillbaka</a>
  <img class="hero" src="${a.img}" alt="${a.title}" onclick="openLightbox('${a.img}')">
  <div class="lightbox" id="lightbox" onclick="closeLightbox(event)">
    <span class="close-lb" onclick="closeLightbox()">&times;</span>
    <img id="lightbox-img" src="" alt="">
  </div>
  <span class="${tagClass(a.tag)}" ${tagStyle(a.tag)}>${a.tagLabel}</span>
  <h1>${a.title}</h1>
  <div class="meta">📅 Måndag 13 juli 2026</div>
  <div class="content">
    ${a.body}
    <p class="kalla">${a.kalla}</p>
  </div>
</div>
<script>
function openLightbox(s){document.getElementById('lightbox-img').src=s;document.getElementById('lightbox').style.display='block';document.body.style.overflow='hidden';}
function closeLightbox(e){if(!e||e.target==e.currentTarget||e.target.classList.contains('close-lb')){document.getElementById('lightbox').style.display='none';document.getElementById('lightbox-img').src='';document.body.style.overflow='';}}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLightbox();});
</script>
</body>
</html>`;
    fs.writeFileSync(`docs/artikel/${a.slug}.html`, html);
    console.log(`✅ docs/artikel/${a.slug}.html`);
  });
}

genIndex();
genArticles();
console.log('\n🎉 Klart! 12 artikelsidor + index.html genererade.');
