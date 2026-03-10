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
const battleLog = document.querySelector(".battle_logs");

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

    if (secondStatus.CHARA == 0) {
        secondImg.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
        secondCharaName.textContent = "ファイヤードラゴン";
    } else if (secondStatus.CHARA == 1) {
        secondImg.innerHTML = `
              <img src="img/chara_2.png" alt="" />
          `;
        secondCharaName.textContent = "スシザムライ";
    } else if (secondStatus.CHARA == 2) {
        secondImg.innerHTML = `
              <img src="img/chara_3.png" alt="" />
          `;
        secondCharaName.textContent = "アップルニンジャ";
    } else if (secondStatus.CHARA == 3) {
        secondImg.innerHTML = `
              <img src="img/chara_4.png" alt="" />
          `;
        secondCharaName.textContent = "ラーメンゴリラ";
    } else if (secondStatus.CHARA == 4) {
        secondImg.innerHTML = `
              <img src="img/chara_5.png" alt="" />
          `;
        secondCharaName.textContent = "プリプリン";
    } else if (secondStatus.CHARA == 5) {
        secondImg.innerHTML = `
              <img src="img/chara_6.png" alt="" />
          `;
        secondCharaName.textContent = "チャラスケボー";
    } else if (secondStatus.CHARA == 6) {
        secondImg.innerHTML = `
              <img src="img/chara_7.png" alt="" />
          `;
        secondCharaName.textContent = "ドリンクザムライ";
    } else if (secondStatus.CHARA == 7) {
        secondImg.innerHTML = `
              <img src="img/chara_8.png" alt="" />
          `;
        secondCharaName.textContent = "バスケンケン";
    } else if (secondStatus.CHARA == 8) {
        secondImg.innerHTML = `
              <img src="img/chara_9.png" alt="" />
          `;
        secondCharaName.textContent = "ハンバーガーズ";
    } else if (secondStatus.CHARA == 9) {
        secondImg.innerHTML = `
              <img src="img/chara_10.png" alt="" />
          `;
        secondCharaName.textContent = "カーニバル";
    } else {
        secondImg.innerHTML = `
              <img src="img/chara_00.png" alt="" />
          `;
        secondCharaName.textContent = "シクラーメン";
    }
}
outputStatus();

const firstTimeID = setInterval(() => {
    secondStatus.HP -= firstStatus.ATK / 10;
    outputHP(secondStatus.HP, "second");
    updateLog("first");
}, firstSPDTime);

const secondTimeID = setInterval(() => {
    firstStatus.HP -= secondStatus.ATK / 10;
    outputHP(firstStatus.HP, "first");
    updateLog("second");
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

function updateLog(ATKside) {
    const NewfirstName = document.querySelector("#firstCharaName");
    const NewsecondName = document.querySelector("#secondCharaName");

    if (ATKside == "first") {
        battleLog.insertAdjacentHTML(
            "afterbegin",
            `
                <div class="battle_log first">
                    <p>${NewfirstName.textContent}の攻撃！ ${firstStatus.ATK / 10}のダメージ！</p>
                </div>
          `,
        );
    } else if (ATKside == "second") {
        battleLog.insertAdjacentHTML(
            "afterbegin",
            `
                <div class="battle_log second">
                    <p>${NewsecondName.textContent}の攻撃！ ${secondStatus.ATK / 10}のダメージ！</p>
                </div>
          `,
        );
    } else {
        return;
    }
}
