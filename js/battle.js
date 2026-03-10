const firstHP = document.querySelector("#firstHPStats");
const firstATK = document.querySelector("#firstATKStats");
const firstSPD = document.querySelector("#firstSPDStats");
const secondHP = document.querySelector("#secondHPStats");
const secondATK = document.querySelector("#secondATKStats");
const secondSPD = document.querySelector("#secondSPDStats");
const firstHPBar = document.querySelector("#firstHPBar");
const secondHPBar = document.querySelector("#secondHPBar");

const firstStatus = JSON.parse(localStorage.getItem("firstStatus"));
const secondStatus = JSON.parse(localStorage.getItem("secondStatus"));
const firstMaxHP = firstStatus.HP;
const secondMaxHP = secondStatus.HP;

function outputStatus() {
    firstHP.textContent = firstStatus.HP;
    firstATK.textContent = firstStatus.ATK;
    firstSPD.textContent = firstStatus.SPD;
    secondHP.textContent = secondStatus.HP;
    secondATK.textContent = secondStatus.ATK;
    secondSPD.textContent = secondStatus.SPD;
}
outputStatus();

const firstTimeID = setInterval(() => {
    secondStatus.HP -= firstStatus.ATK / 10;
    outputHP(secondStatus.HP, "second");
    console.log(secondStatus.HP);
}, 1000);

const secondTimeID = setInterval(() => {
    firstStatus.HP = secondStatus.ATK / 10;
}, 2000);

function outputHP(HP, ATKside) {
    if (ATKside == "first") {
        if (HP <= 0) {
            firstHPBar.style.width = `0%`;
        }
        const parseHP = (HP / firstMaxHP) * 100;
        firstHPBar.style.width = `${parseHP}%`;
    } else if (ATKside == "second") {
        if (HP <= 0) {
            secondHPBar.style.width = `0%`;
        }
        const parseHP = (HP / secondMaxHP) * 100;
        secondHPBar.style.width = `${parseHP}%`;
    } else {
        return;
    }
}
