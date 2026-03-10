const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#resetBtn");
const hpStats = document.querySelector("#hpStats");
const atkStats = document.querySelector("#atkStats");
const spdStats = document.querySelector("#spdStats");
const charaCard = document.querySelector("#charaCard");
const charaName = document.querySelector("#charaName");
const addModal = document.querySelector("#addModal");
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
        console.log(data);

        const code = data.codeResult.code;

        const tempHP = code.slice(3, 6).replace(/^0/, "");
        const tempATK = code.slice(6, 9).replace(/^0/, "");
        const tempSPD = code.slice(9, 12).replace(/^0/, "");
        firstStatus.HP = tempHP + "0";
        firstStatus.ATK = tempATK + "0";
        firstStatus.SPD = tempSPD + "0";
        firstStatus.CHARA = code.slice(-1);

        Quagga.stop();

        addModal.insertAdjacentHTML(
            "beforeend",
            `
                <div class="load_modal">
                    <h2>生成中...</h2>
                    <div class="load_bar"></div>
                </div>
            `,
        );

        setTimeout(() => {
            modal.style.display = "block";
            hpStats.textContent = firstStatus.HP;
            atkStats.textContent = firstStatus.ATK;
            spdStats.textContent = firstStatus.SPD;
            if (firstStatus.CHARA == 0) {
                charaCard.innerHTML = `
                    <img src="img/chara_1.png" alt="" />
                `;
                charaName.textContent = "メガドラグーン";
            } else if (firstStatus.CHARA == 1) {
                charaCard.innerHTML = `
                    <img src="img/chara_2.png" alt="" />
                `;
                charaName.textContent = "スシマル";
            } else if (firstStatus.CHARA == 2) {
                charaCard.innerHTML = `
                    <img src="img/chara_3.png" alt="" />
                `;
                charaName.textContent = "アップルノスケ";
            } else if (firstStatus.CHARA == 3) {
                charaCard.innerHTML = `
                    <img src="img/chara_4.png" alt="" />
                `;
                charaName.textContent = "デカモリラーメン";
            } else if (firstStatus.CHARA == 4) {
                charaCard.innerHTML = `
                    <img src="img/chara_5.png" alt="" />
                `;
                charaName.textContent = "プリンパル";
            } else if (firstStatus.CHARA == 5) {
                charaCard.innerHTML = `
                    <img src="img/chara_6.png" alt="" />
                `;
                charaName.textContent = "スニエル=スニー";
            } else if (firstStatus.CHARA == 6) {
                charaCard.innerHTML = `
                    <img src="img/chara_7.png" alt="" />
                `;
                charaName.textContent = "ドリンクザムライ";
            } else if (firstStatus.CHARA == 7) {
                charaCard.innerHTML = `
                    <img src="img/chara_8.png" alt="" />
                `;
                charaName.textContent = "ダンクファング";
            } else if (firstStatus.CHARA == 8) {
                charaCard.innerHTML = `
                    <img src="img/chara_9.png" alt="" />
                `;
                charaName.textContent = "バーガーバースト";
            } else if (firstStatus.CHARA == 9) {
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
        }, 550);
        firstStatusBtn.addEventListener("click", () => {
            localStorage.setItem("firstStatus", JSON.stringify(firstStatus));
        });
    });
});
