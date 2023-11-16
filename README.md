# Hackató Jump2Digial - Equip 3

Reduir la concentració de turístes a punts molt coneguts de Barcelona. L'objectiu d'aquesta aplicació és decentralitzar la concentració de persones turístes a certes zones de la ciutat i animar-los a visitar altres llocs, potser menys coneguts, que es veuen des del "BCN secreta".

# Taula de contigut

- [Hackató Jump2Digial - Equip 3](#hackató-jump2digial---equip-3)
- [Taula de contigut](#taula-de-contigut)
  - [Experiència de l'usuari (UX)](#experiència-de-lusuari-ux)
  - [Llenguatges Utilitzats](#llenguatges-utilitzats)
  - [Frameworks - Biblioteques - Programes utilitzats](#frameworks---biblioteques---programes-utilitzats)
  - [Instal·lació](#installació)
  - [Proves / Tests](#proves--tests)
  - [Implementacions al futur](#implementacions-al-futur)
  - [Crèdits](#crèdits)
  - [Equip](#equip)

## Experiència de l'usuari (UX)

Aquesta aplicació està dirigida als visitants que vénen a Barcelona i volen participar en activitats turístiques. Moltes vegades, la ciutat es congestiona amb la quantitat de turisme que rep cada any als llocs i atraccions més coneguts.

La nostra aplicació permet que als usuaris vegin opcions de llocs per visitar que estan fora del "camí trepitjat", fent-los il·lusió a descobrir la 'Barcelona secreta'.

L'usuari podrà obrir l'aplicació i clicar un botó per veure un mapa amb els museus de la ciutat. Podran clicar sobre cada icona de museu per veure el nom del museu, una breu informació descriptiva i la categoria del museu.

A més d'una representació visual dels museus, l'usuari tindrà la seva ubicació gràcies a la geolocalització. Això es permetrà tracar-se una ruta a peu, en transport públic o en bicicleta per arribar al museu.

Per a qualsevol usuari, la pàgina ha de veure's bé a totes les mides de dispositiu, ha d'estar disponible en diversos navegadors i ser fàcilment llegible.

## Llenguatges Utilitzats

- HTML
- CSS
- Javascript
- Typescript

## Frameworks - Biblioteques - Programes utilitzats

- [GitHub](https://github.com/) - Usat per allotjar el repositori del projecte.
- [React](https://www.react.express/) - Usat pel frontend del projecte.
- [Vite + Tailwind](https://tailwindcss.com/docs/guides/vite) - CSS utilitzat per desenvolupar el 'responsiveness' i el disseny del lloc web.
- [Nestjs](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/es)
- [Mongoose](https://mongoosejs.com/)

La motivació de fer servir Nest per al Backend venia pel fet que fa servir per defecte l'esquema de model-vista-controlador, que hem cregut adient per a aquesta aplicació, i deixa pre configurats els tests dels diferents serveis i controladors.

## Instal·lació

Per fer funcionar aquesta app cal disposar del següent programari:

- NodeJS
- VSCode
- Git

Clonar el repositori a vscode

```Bash
git clone https://github.com/Kaylaesmith1/jump2digital-equip3/tree/main
```

Accedir als directori de front i instal·lar els paquets:

```Bash
cd front
npm i
```

Iniciar el frontend

```Bash
npm run dev
```

En el navegador accedir al port 5173

```
http://localhost:5173
```

Accedir al directori de backend i iniciar el servidor, que es connectarà a la base de dades

```Bash
cd ../back
npm i
```

```Bash
npm run start
```

## Proves / Tests

S'han implementat tests unitaris mitjançant JEST per als endpoints associats a punts d'interès i zones. Concretament pels controladors dels models de Museus i Zones, i pels serveis que utilitzen per comunicar-se amb la base de dades. També incorpora Swagger per veure la documentació de la API.

## Implementacions al futur

L'API gestiona una quantitat ingent de dades, que en una evolució de la mateixa hauria de permetre acotarles a fi d'incrementar l'eficiència de les crides a servidor i millorar l'experiència d'usuari.


## Crèdits

Ens agradaria donar les gràcies a Jump2Digital per acollir aquest esdeveniment i facilitar aquesta experiència d'equip a través d'un hackathó presencial. Els mentors han sigut extremadament útils per al nostre equip i han proporcionat una retroalimentació valuosa, tant al principi com al llarg de les activitats del dia.

Per últim, gràcies al nostre equip per haver treballat junts d'una manera diligenta per fer realitat aquesta aplicació!

## Equip

Raul Alhena
