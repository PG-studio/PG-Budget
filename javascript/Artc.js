const btnRevenus = document.querySelector("#revenus-btn");
const btnBanque = document.querySelector("#banque-btn");
const btnCredit = document.querySelector("#credit-btn");
const btnlogement = document.querySelector("#logement-btn");
const btnEnergie = document.querySelector("#energie-btn");
const btnAlimentation = document.querySelector("#alimentation-btn");
const btnTransport = document.querySelector("#transport-btn");
const btnSante = document.querySelector("#sante-btn");


btnRevenus.addEventListener("click", function() {
    btnRevenus.classList.remove("text-secondary");

    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileRevenus.classList.remove("d-none");

    listeArctileBanque.classList.add("d-none");
    listeArctileCredit.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnBanque.addEventListener("click", function() {
    btnBanque.classList.remove("text-secondary");
    btnBanque.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileBanque.classList.remove("d-none");

    listeArctileRevenus.classList.add("d-none");
    listeArctileCredit.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnCredit.addEventListener("click", function() {
    btnCredit.classList.remove("text-secondary");
    btnCredit.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileCredit.classList.remove("d-none");

    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnlogement.addEventListener("click", function() {
    btnlogement.classList.remove("text-secondary");
    btnlogement.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileLogement.classList.remove("d-none");

    listeArctileCredit.classList.add("d-none");
    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnEnergie.addEventListener("click", function() {
    btnEnergie.classList.remove("text-secondary");
    btnEnergie.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileEnergie.classList.remove("d-none");

    listeArctileCredit.classList.add("d-none");
    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnAlimentation.addEventListener("click", function() {
    btnAlimentation.classList.remove("text-secondary");
    btnAlimentation.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileAlimentation.classList.remove("d-none");

    listeArctileCredit.classList.add("d-none");
    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnTransport.addEventListener("click", function() {
    btnTransport.classList.remove("text-secondary");
    btnTransport.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnSante.classList.add("text-secondary");

    listeArctileTransport.classList.remove("d-none");

    listeArctileCredit.classList.add("d-none");
    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileSante.classList.add("d-none");
});

btnSante.addEventListener("click", function() {
    btnSante.classList.remove("text-secondary");
    btnSante.classList.add("text-primary");

    btnRevenus.classList.add("text-secondary");
    btnBanque.classList.add("text-secondary");
    btnCredit.classList.add("text-secondary");
    btnlogement.classList.add("text-secondary");
    btnEnergie.classList.add("text-secondary");
    btnAlimentation.classList.add("text-secondary");
    btnTransport.classList.add("text-secondary");

    listeArctileSante.classList.remove("d-none");

    listeArctileCredit.classList.add("d-none");
    listeArctileBanque.classList.add("d-none");
    listeArctileRevenus.classList.add("d-none");
    listeArctileLogement.classList.add("d-none");
    listeArctileEnergie.classList.add("d-none");
    listeArctileAlimentation.classList.add("d-none");
    listeArctileTransport.classList.add("d-none");
});

