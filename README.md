In het maken van de website werken we een bepaalde bestanden structuur

project-root/
│
├── dist/                # Gecompileerde en geoptimaliseerde bestanden voor productie
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── services.html
│
├── src/                 # Bronbestanden
│   ├── css/             # Stijlen
│   │   ├── main.css
│   │   ├── reset.css
│   │   └── components/  # CSS-bestanden voor specifieke componenten
│   │       ├── header.css
│   │       └── footer.css
│   │
│   ├── js/              # JavaScript-bestanden
│   │   ├── main.js
│   │   └── components/  # JavaScript-bestanden voor specifieke componenten
│   │       ├── slider.js
│   │       └── modal.js
│   │
│   ├── images/          # Afbeeldingen
│   │   ├── logo.png
│   │   └── background.jpg
│   │
│   ├── pages/           # Submap voor HTML-pagina's
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── contact.html
│   │   └── services.html
│   │
│   ├── partials/        # Herbruikbare HTML-deelbestanden
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── navbar.html
│
├── node_modules/        # Node.js modules (automatisch gegenereerd)
│
├── .gitignore           # Git ignore file
├── package.json         # NPM configuratiebestand
├── webpack.config.js    # Webpack configuratiebestand (indien gebruikt)
└── README.md            # Projectdocumentatie

dUitleg van de mappen en bestanden

dist/: Bevat de gecompileerde en geoptimaliseerde bestanden die klaar zijn voor productie.

css/: Gecompileerde CSS-bestanden.
js/: Gecompileerde JavaScript-bestanden.
images/: Geoptimaliseerde afbeeldingen.
index.html, about.html, contact.html, services.html: De geoptimaliseerde HTML-pagina's.
src/: Bevat alle bronbestanden van je project.

css/: Bevat alle CSS-bestanden.
main.css: Hoofd CSS-bestand dat andere CSS-bestanden kan importeren.
reset.css: CSS-bestand om standaard browserstijlen te resetten.
components/: Submap voor CSS-bestanden van specifieke componenten.
js/: Bevat alle JavaScript-bestanden.
main.js: Hoofd JavaScript-bestand dat andere scriptbestanden kan importeren.
components/: Submap voor JavaScript-bestanden van specifieke componenten.
images/: Bevat alle afbeeldingen die in de website worden gebruikt.
pages/: Bevat de HTML-pagina's van de website.
partials/: Bevat herbruikbare HTML-deelbestanden zoals de header, footer en navbar. Deze bestanden kunnen worden geïmporteerd in de verschillende HTML-pagina's om codeherhaling te minimaliseren.
node_modules/: Bevat alle geïnstalleerde Node.js modules. Deze map wordt automatisch gegenereerd door het uitvoeren van npm install.

.gitignore: Bevat een lijst van bestanden en mappen die Git moet negeren. Bijvoorbeeld node_modules/ en dist/.

package.json: Bevat de configuratie en afhankelijkheden voor je Node.js project.

webpack.config.js: Webpack configuratiebestand indien je Webpack gebruikt voor het bundelen van je bestanden.

README.md: Bevat documentatie over je project.

Voordelen van deze structuur

Organisatie: Door je bestanden in relevante mappen te plaatsen, blijft je project georganiseerd en gemakkelijk te navigeren.
Herbruikbaarheid: Door gebruik te maken van deelbestanden (zoals header en footer) kun je herbruikbare componenten maken die op meerdere pagina's kunnen worden gebruikt.
Schaalbaarheid: Deze structuur maakt het gemakkelijk om nieuwe pagina's en componenten toe te voegen zonder dat je project onoverzichtelijk wordt.
Onderhoudbaarheid: Het is gemakkelijker om stijlen en scripts te beheren wanneer ze zijn opgesplitst in logische onderdelen.

reset.css: Reset de standaard browserstijlen om consistentie te garanderen.
main.css: Bevat de hoofdcascadestijlen voor je website, zoals lay-out, typografie en kleuren.

Bevat JavaScript-functies voor het openen en sluiten van modale vensters. Het gebruikt event listeners om te reageren op knopklikken die modale vensters openen of sluiten.
slider.js: Bevat JavaScript-functies voor het beheren van een schuifregelaar. Het zorgt ervoor dat de juiste slide wordt weergegeven en biedt functionaliteit voor het navigeren tussen slides.

