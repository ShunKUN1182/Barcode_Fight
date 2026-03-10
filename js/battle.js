const firstHP = document.querySelector("#firstHPStats");
const firstATK = document.querySelector("#firstATKStats");
const firstSPD = document.querySelector("#firstSPDStats");
const secondHP = document.querySelector("#secondHPStats");
const secondATK = document.querySelector("#secondATKStats");
const secondSPD = document.querySelector("#secondSPDStats");
const firstHPBar = document.querySelector("#firstHPBar");
const secondHPBar = document.querySelector("#secondHPBar");
const firstHPText = document.querySelector("#firstHPText");
const secondHPText = document.querySelector("#secondHPText");
const firstImg = document.querySelector("#firstImg");
const secondImg = document.querySelector("#secondImg");
const firstCharaName = document.querySelector("#firstCharaName");
const secondCharaName = document.querySelector("#secondCharaName");

const firstStatus = JSON.parse(localStorage.getItem("firstStatus"));
const secondStatus = JSON.parse(localStorage.getItem("secondStatus"));
const firstMaxHP = firstStatus.HP;
const secondMaxHP = secondStatus.HP;

const firstSPDTime = (10000 - firstStatus.SPD) / 10;
const secondSPDTime = (10000 - secondStatus.SPD) / 10;
console.log(firstSPDTime, secondSPDTime);

function outputStatus() {
    firstHP.textContent = firstStatus.HP;
    firstATK.textContent = firstStatus.ATK;
    firstSPD.textContent = firstStatus.SPD;
    secondHP.textContent = secondStatus.HP;
    secondATK.textContent = secondStatus.ATK;
    secondSPD.textContent = secondStatus.SPD;
    firstHPText.textContent = firstStatus.HP;
    secondHPText.textContent = secondStatus.HP;

    if (firstStatus.CHARA == 0) {
        firstImg.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
        firstCharaName.textContent = "ファイヤードラゴン";
    } else if (firstStatus.CHARA == 1) {
        firstImg.innerHTML = `
              <img src="img/chara_2.png" alt="" />
          `;
        firstCharaName.textContent = "スシザムライ";
    } else if (firstStatus.CHARA == 2) {
        firstImg.innerHTML = `
              <img src="img/chara_3.png" alt="" />
          `;
        firstCharaName.textContent = "アップルニンジャ";
    } else if (firstStatus.CHARA == 3) {
        firstImg.innerHTML = `
              <img src="img/chara_4.png" alt="" />
          `;
        firstCharaName.textContent = "ラーメンゴリラ";
    } else if (firstStatus.CHARA == 4) {
        firstImg.innerHTML = `
              <img src="img/chara_5.png" alt="" />
          `;
        firstCharaName.textContent = "プリプリン";
    } else if (firstStatus.CHARA == 5) {
        firstImg.innerHTML = `
              <img src="img/chara_6.png" alt="" />
          `;
        firstCharaName.textContent = "チャラスケボー";
    } else if (firstStatus.CHARA == 6) {
        firstImg.innerHTML = `
              <img src="img/chara_7.png" alt="" />
          `;
        firstCharaName.textContent = "ドリンクザムライ";
    } else if (firstStatus.CHARA == 7) {
        firstImg.innerHTML = `
              <img src="img/chara_8.png" alt="" />
          `;
        firstCharaName.textContent = "バスケンケン";
    } else if (firstStatus.CHARA == 8) {
        firstImg.innerHTML = `
              <img src="img/chara_9.png" alt="" />
          `;
        firstCharaName.textContent = "ハンバーガーズ";
    } else if (firstStatus.CHARA == 9) {
        firstImg.innerHTML = `
              <img src="img/chara_10.png" alt="" />
          `;
        firstCharaName.textContent = "カーニバル";
    } else {
        firstImg.innerHTML = `
              <img src="img/chara_00.png" alt="" />
          `;
        firstCharaName.textContent = "シクラーメン";
    }
}
outputStatus();

const firstTimeID = setInterval(() => {
    secondStatus.HP -= firstStatus.ATK / 10;
    outputHP(secondStatus.HP, "second");
}, firstSPDTime);

const secondTimeID = setInterval(() => {
    firstStatus.HP -= secondStatus.ATK / 10;
    outputHP(firstStatus.HP, "first");
}, secondSPDTime);

function outputHP(HP, ATKside) {
    if (ATKside == "first") {
        if (HP <= 0) {
            firstHPBar.style.width = `0%`;
            clearInterval(firstTimeID);
            clearInterval(secondTimeID);
        }
        const parseHP = (HP / firstMaxHP) * 100;
        firstHPBar.style.width = `${parseHP}%`;
    } else if (ATKside == "second") {
        if (HP <= 0) {
            secondHPBar.style.width = `0%`;
            clearInterval(firstTimeID);
            clearInterval(secondTimeID);
        }
        const parseHP = (HP / secondMaxHP) * 100;
        secondHPBar.style.width = `${parseHP}%`;
    } else {
        return;
    }
}
