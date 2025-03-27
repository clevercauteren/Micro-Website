Micro website voor 5ADB

---

Startpagina - Jason

Overzicht van lessenpakket 5de en 6de jaar - Alexander/Tommy

ContactFormulier - Clemeant

ChatBot - Alexander

Foto's Pagina - Robbe

Mogelijkheden na 6de - Tommy

Samenbrengen van website - Jorne

Design en animatie -
Foto’s en video’s - Jorne

Eindafwerking - Robbe

---

In het maken van de website werken we een bepaalde bestanden structuur.
zie Het bestand BestandStructuur.txt voor de uitleg.
(wordt niet meer gebruikt)

---

Alexander Brands

Jorne




# GitHub & VS Code: Werken aan Iemands Repository (Windows)

## 1. Vereisten
Voor je begint, zorg ervoor dat je het volgende hebt geïnstalleerd:

- **Git**: [Download hier](https://git-scm.com/downloads)
- **Visual Studio Code**: [Download hier](https://code.visualstudio.com/)
- **GitHub-account**: [Maak een account aan](https://github.com/)
- **GitHub CLI (optioneel)**: [Download hier](https://cli.github.com/)

## 2. Repository Clonen
Om aan iemands code te werken, moet je de repository lokaal op je computer halen.

### 2.1 Clonen met Git Bash (Aanbevolen)
1. Open **Git Bash**
2. Navigeer naar de map waar je de repo wilt opslaan:
   ```sh
   cd C:/Users/JOUW_GEBRUIKERSNAAM/Documents
   ```
3. Clone de repository:
   ```sh
   git clone https://github.com/GEBRUIKER/REPO.git
   ```
4. Ga naar de repo-map:
   ```sh
   cd REPO
   ```

### 2.2 Clonen met GitHub CLI
1. Log in met GitHub CLI:
   ```sh
   gh auth login
   ```
2. Clone de repository:
   ```sh
   gh repo clone GEBRUIKER/REPO
   ```

## 3. Open de Repository in VS Code
1. Open **VS Code**
2. Klik op **File > Open Folder** en selecteer de repo-map
3. Installeer de **GitHub Pull Requests and Issues** extensie in VS Code (optioneel)

## 4. Werken aan de Code
### 4.1 Nieuwe Branch Maken (Aanbevolen)
Voordat je wijzigingen maakt, werk je in een aparte branch:
```sh
git checkout -b mijn-wijzigingen
```

### 4.2 Wijzigingen Opslaan en Committen
Na het bewerken van bestanden:
1. Check welke bestanden gewijzigd zijn:
   ```sh
   git status
   ```
2. Voeg de bestanden toe aan de commit:
   ```sh
   git add .
   ```
3. Maak een commit met een beschrijving:
   ```sh
   git commit -m "Beschrijving van mijn wijziging"
   ```

### 4.3 Wijzigingen naar GitHub Sturen (Pushen)
```sh
git push origin mijn-wijzigingen
```

## 5. Pull Request (PR) Maken
1. Ga naar de repository op GitHub
2. Klik op **Pull Requests** > **New Pull Request**
3. Selecteer jouw branch en beschrijf je wijzigingen
4. Klik op **Create Pull Request**

## 6. Up-to-Date Blijven met de Originele Repository
Als er nieuwe wijzigingen in de originele repository zijn, update dan je lokale repo:
```sh
git checkout main  
git pull origin main  
git checkout mijn-wijzigingen  
git merge main  
```

## 7. Veelvoorkomende Problemen
- **Probleem: "fatal: Authentication failed"**  
  - Gebruik:  
    ```sh
    git credential reject https://github.com
    git pull
    ```
  - Of log opnieuw in met GitHub CLI.

- **Probleem: "Merge conflict"**  
  - Open conflicterende bestanden in VS Code  
  - Kies tussen "Accept Incoming" of "Accept Current"  
  - Commit de wijzigingen en push opnieuw  

## 8. Extra Tips
- Gebruik `git log --oneline --graph` om commits visueel te zien
- Maak altijd een nieuwe branch voor elke feature/fix
- Gebruik `git stash` als je tijdelijk je wijzigingen wilt opslaan

Met deze handleiding kun je soepel aan iemand anders zijn repository werken via Windows en VS Code! 🚀

