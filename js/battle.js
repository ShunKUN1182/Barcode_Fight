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
const addModal = document.querySelector("#addModal");
const modal = document.querySelector(".modal");
const winName = document.querySelector("#winName");
console.log(addModal);

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
        firstCharaName.textContent = "メガドラグーン";
    } else if (firstStatus.CHARA == 1) {
        firstImg.innerHTML = `
              <img src="img/chara_2.png" alt="" />
          `;
        firstCharaName.textContent = "スシマル";
    } else if (firstStatus.CHARA == 2) {
        firstImg.innerHTML = `
              <img src="img/chara_3.png" alt="" />
          `;
        firstCharaName.textContent = "アップルノスケ";
    } else if (firstStatus.CHARA == 3) {
        firstImg.innerHTML = `
              <img src="img/chara_4.png" alt="" />
          `;
        firstCharaName.textContent = "デカモリラーメン";
    } else if (firstStatus.CHARA == 4) {
        firstImg.innerHTML = `
              <img src="img/chara_5.png" alt="" />
          `;
        firstCharaName.textContent = "プリンパル";
    } else if (firstStatus.CHARA == 5) {
        firstImg.innerHTML = `
              <img src="img/chara_6.png" alt="" />
          `;
        firstCharaName.textContent = "スニエル=スニー";
    } else if (firstStatus.CHARA == 6) {
        firstImg.innerHTML = `
              <img src="img/chara_7.png" alt="" />
          `;
        firstCharaName.textContent = "ドリンクザムライ";
    } else if (firstStatus.CHARA == 7) {
        firstImg.innerHTML = `
              <img src="img/chara_8.png" alt="" />
          `;
        firstCharaName.textContent = "ダンクファング";
    } else if (firstStatus.CHARA == 8) {
        firstImg.innerHTML = `
              <img src="img/chara_9.png" alt="" />
          `;
        firstCharaName.textContent = "バーガーバースト";
    } else if (firstStatus.CHARA == 9) {
        firstImg.innerHTML = `
              <img src="img/chara_10.png" alt="" />
          `;
        firstCharaName.textContent = "カーライガ";
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
        secondCharaName.textContent = "メガドラグーン";
    } else if (secondStatus.CHARA == 1) {
        secondImg.innerHTML = `
              <img src="img/chara_2.png" alt="" />
          `;
        secondCharaName.textContent = "スシマル";
    } else if (secondStatus.CHARA == 2) {
        secondImg.innerHTML = `
              <img src="img/chara_3.png" alt="" />
          `;
        secondCharaName.textContent = "アップルノスケ";
    } else if (secondStatus.CHARA == 3) {
        secondImg.innerHTML = `
              <img src="img/chara_4.png" alt="" />
          `;
        secondCharaName.textContent = "デカモリラーメン";
    } else if (secondStatus.CHARA == 4) {
        secondImg.innerHTML = `
              <img src="img/chara_5.png" alt="" />
          `;
        secondCharaName.textContent = "プリンパル";
    } else if (secondStatus.CHARA == 5) {
        secondImg.innerHTML = `
              <img src="img/chara_6.png" alt="" />
          `;
        secondCharaName.textContent = "スニエル=スニー";
    } else if (secondStatus.CHARA == 6) {
        secondImg.innerHTML = `
              <img src="img/chara_7.png" alt="" />
          `;
        secondCharaName.textContent = "ドリンクザムライ";
    } else if (secondStatus.CHARA == 7) {
        secondImg.innerHTML = `
              <img src="img/chara_8.png" alt="" />
          `;
        secondCharaName.textContent = "ダンクファング";
    } else if (secondStatus.CHARA == 8) {
        secondImg.innerHTML = `
              <img src="img/chara_9.png" alt="" />
          `;
        secondCharaName.textContent = "バーガーバースト";
    } else if (secondStatus.CHARA == 9) {
        secondImg.innerHTML = `
              <img src="img/chara_10.png" alt="" />
          `;
        secondCharaName.textContent = "カーライガ";
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
            addModal.insertAdjacentHTML(
                "beforeend",
                `
                  <div class="finish">
                      <img src="img/finish_Img.png" alt="" />
                  </div>
                `,
            );
            setTimeout(() => {
                modal.style.display = "block";
                winName.textContent = document.querySelector("#firstCharaName").textContent;
            });
        }
        const parseHP = (HP / firstMaxHP) * 100;
        firstHPBar.style.width = `${parseHP}%`;
    } else if (ATKside == "second") {
        if (HP <= 0) {
            secondHPBar.style.width = `0%`;
            clearInterval(firstTimeID);
            clearInterval(secondTimeID);
            addModal.insertAdjacentHTML(
                "beforeend",
                `
                  <div class="finish">
                      <img src="img/finish_Img.png" alt="" />
                  </div>
                `,
            );
            setTimeout(() => {
                modal.style.display = "block";
                winName.textContent = document.querySelector("#secondCharaName").textContent;
            }, 2000);
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
