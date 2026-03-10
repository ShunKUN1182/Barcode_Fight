const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#resetBtn");
const hpStats = document.querySelector("#hpStats");
const atkStats = document.querySelector("#atkStats");
const spdStats = document.querySelector("#spdStats");
const charaCard = document.querySelector("#charaCard");
const charaName = document.querySelector("#charaName");
const firstStatusBtn = document.querySelector("#firstStatusBtn");
const firstStatus = {};

window.addEventListener("DOMContentLoaded", () => {
    Quagga.init(
        {
            inputStream: {
                type: "LiveStream",
                target: document.querySelector("#camera"),
                constraints: {
                    facingMode: "environment", // 背面カメラ
                },
            },
            decoder: {
                readers: ["ean_reader"], // 商品バーコード
            },
        },
        function (err) {
            if (err) {
                console.error(err);
                return;
            }

            Quagga.start();
        },
    );

    // 読み取り成功
    Quagga.onDetected((data) => {
        const code = data.codeResult.code;

        document.querySelector("#result").textContent = "読み取り成功：" + code;

        console.log(code);

        console.log(code.slice(3, 6));
        console.log(code.slice(6, 9));
        console.log(code.slice(9, 12));
        console.log(code.slice(-1));
        console.log(firstStatus);
        const tempHP = code.slice(3, 6).replace(/^0/, "");
        const tempATK = code.slice(6, 9).replace(/^0/, "");
        const tempSPD = code.slice(9, 12).replace(/^0/, "");
        firstStatus.HP = tempHP + "0";
        firstStatus.ATK = tempATK + "0";
        firstStatus.SPD = tempSPD + "0";
        firstStatus.CHARA = code.slice(-1);

        Quagga.stop();

        modal.style.display = "block";
        hpStats.textContent = firstStatus.HP;
        atkStats.textContent = firstStatus.ATK;
        spdStats.textContent = firstStatus.SPD;
        if (firstStatus.CHARA == 0) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 1) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 2) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 3) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 4) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 5) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 6) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 7) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 8) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else if (firstStatus.CHARA == 9) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "ファイヤードラゴン";
        } else {
            charaCard.innerHTML = `
              <img src="img/barcode_img.png" alt="" />
          `;
            charaName.textContent = "シークレットドラゴン";
        }
        firstStatusBtn.addEventListener("click", () => {
            localStorage.setItem("firstStatus", JSON.stringify(firstStatus));
        });
    });
});
