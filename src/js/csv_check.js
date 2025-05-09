document.addEventListener("DOMContentLoaded", function () {
    const plaatsInput = document.getElementById("plaats");
    const straatInput = document.getElementById("straat");
    const plaatsDatalist = document.getElementById("plaatsenlijst");
    const straatDatalist = document.getElementById("stratenlijst");
    const plaatsError = document.getElementById("plaatsError");
    const straatError = document.getElementById("straatError");
    const verzendButton = document.getElementById("Verzendbutton");

    let plaatsenData = [];
    let stratenData = [];
    let huidigeStraten = []; // Opslag voor straten van de geselecteerde plaats

    // Geef inputs een zwarte achtergrond
    plaatsInput.style.border = "solid white 0.5px";
    straatInput.style.border = "solid white 0.5px";
    plaatsInput.style.backgroundColor = "black";
    straatInput.style.backgroundColor = "black";
    plaatsInput.style.color = "white"; // Voor leesbaarheid
    straatInput.style.color = "white";

    // CSV inladen en converteren naar JSON
    async function loadCSV(url) {
        try {
            const response = await fetch(url);
            const csvText = await response.text();
            const rows = csvText.split("\n").slice(1); // Header overslaan
            
            return rows.map(row => {
                const columns = row.split(",");
                return {
                    street_nl: columns[4]?.trim().replace(/"/g, "") || "",  // Straatnaam op index 4
                    city_nl: columns[7]?.trim().replace(/"/g, "") || ""   // Plaatsnaam op index 7
                };
            }).filter(entry => entry.city_nl && entry.street_nl); // Lege waarden filteren
        } catch (error) {
            console.error("Fout bij laden CSV:", error);
            return [];
        }
    }

    // Laadt het CSV-bestand en vult de lijsten
    loadCSV("/src/csv/plaatsen_en_straten.csv").then(data => {
        stratenData = data;
        plaatsenData = [...new Set(data.map(entry => entry.city_nl))];

        // Vul de plaatsen-datalist
        plaatsenData.forEach(plaats => {
            let option = document.createElement("option");
            option.value = plaats;
            plaatsDatalist.appendChild(option);
        });
    });

    // Controleer de validatie en vergrendel de verzendknop indien nodig
    function validateForm() {
        const plaatsCorrect = !plaatsError.textContent && plaatsInput.value.trim() !== "";
        const straatCorrect = !straatError.textContent && straatInput.value.trim() !== "";
        
        verzendButton.disabled = !(plaatsCorrect && straatCorrect);
    }

    // Wanneer een plaats wordt ingevoerd
    plaatsInput.addEventListener("input", function () {
        straatDatalist.innerHTML = "";
        plaatsError.textContent = "";
        straatError.textContent = "";
        straatInput.value = ""; // Wis de straat als een nieuwe plaats wordt geselecteerd

        const geselecteerdePlaats = plaatsInput.value.trim().toLowerCase();

        if (!geselecteerdePlaats) {
            huidigeStraten = [];
            validateForm();
            return;
        }

        huidigeStraten = stratenData
            .filter(entry => entry.city_nl.toLowerCase() === geselecteerdePlaats)
            .map(entry => entry.street_nl);

        if (huidigeStraten.length === 0) {
            plaatsError.textContent = "Onjuiste plaats";
        } else {
            huidigeStraten.forEach(straat => {
                let option = document.createElement("option");
                option.value = straat;
                straatDatalist.appendChild(option);
            });
        }

        validateForm();
    });

    // Controleer of de straat klopt bij de gekozen plaats
    straatInput.addEventListener("input", function () {
        straatError.textContent = "";

        const geselecteerdeStraat = straatInput.value.trim();

        if (huidigeStraten.length > 0 && !huidigeStraten.includes(geselecteerdeStraat)) {
            straatError.textContent = "Onjuiste straat";
        }

        validateForm();
    });
});
