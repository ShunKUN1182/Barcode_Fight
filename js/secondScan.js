const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#resetBtn");
const hpStats = document.querySelector("#hpStats");
const atkStats = document.querySelector("#atkStats");
const spdStats = document.querySelector("#spdStats");
const charaCard = document.querySelector("#charaCard");
const charaName = document.querySelector("#charaName");
const secondStatusbtn = document.querySelector("#secondBtn");
const secondStatus = {};

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
        console.log(secondStatus);
        const tempHP = code.slice(3, 6).replace(/^0/, "");
        const tempATK = code.slice(6, 9).replace(/^0/, "");
        const tempSPD = code.slice(9, 12).replace(/^0/, "");
        secondStatus.HP = tempHP + "0";
        secondStatus.ATK = tempATK + "0";
        secondStatus.SPD = tempSPD + "0";
        secondStatus.CHARA = code.slice(-1);

        Quagga.stop();

        modal.style.display = "block";
        hpStats.textContent = secondStatus.HP;
        atkStats.textContent = secondStatus.ATK;
        spdStats.textContent = secondStatus.SPD;
        if (secondStatus.CHARA == 0) {
            charaCard.innerHTML = `
              <img src="img/chara_1.png" alt="" />
          `;
            charaName.textContent = "メガドラグーン";
        } else if (secondStatus.CHARA == 1) {
            charaCard.innerHTML = `
              <img src="img/chara_2.png" alt="" />
          `;
            charaName.textContent = "スシマル";
        } else if (secondStatus.CHARA == 2) {
            charaCard.innerHTML = `
              <img src="img/chara_3.png" alt="" />
          `;
            charaName.textContent = "アップルノスケ";
        } else if (secondStatus.CHARA == 3) {
            charaCard.innerHTML = `
              <img src="img/chara_4.png" alt="" />
          `;
            charaName.textContent = "デカモリラーメン";
        } else if (secondStatus.CHARA == 4) {
            charaCard.innerHTML = `
              <img src="img/chara_5.png" alt="" />
          `;
            charaName.textContent = "プリンパル";
        } else if (secondStatus.CHARA == 5) {
            charaCard.innerHTML = `
              <img src="img/chara_6.png" alt="" />
          `;
            charaName.textContent = "スニエル=スニー";
        } else if (secondStatus.CHARA == 6) {
            charaCard.innerHTML = `
              <img src="img/chara_7.png" alt="" />
          `;
            charaName.textContent = "ドリンクザムライ";
        } else if (secondStatus.CHARA == 7) {
            charaCard.innerHTML = `
              <img src="img/chara_8.png" alt="" />
          `;
            charaName.textContent = "ダンクファング";
        } else if (secondStatus.CHARA == 8) {
            charaCard.innerHTML = `
              <img src="img/chara_9.png" alt="" />
          `;
            charaName.textContent = "バーガーバースト";
        } else if (secondStatus.CHARA == 9) {
            charaCard.innerHTML = `
              <img src="img/chara_10.png" alt="" />
          `;
            charaName.textContent = "カーライガ";
        } else {
            charaCard.innerHTML = `
              <img src="img/chara_00.png" alt="" />
          `;
            charaName.textContent = "シクラーメン";
        }
        secondStatusbtn.addEventListener("click", () => {
            localStorage.setItem("secondStatus", JSON.stringify(secondStatus));
        });
    });
});
