const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#resetBtn");
const hpStats = document.querySelector("#hpStats");
const atkStats = document.querySelector("#atkStats");
const spdStats = document.querySelector("#spdStats");
const firstStatus = [];

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
        firstStatus.push({ HP: code.slice(3, 6) });
        firstStatus.push({ ATK: code.slice(6, 9) });
        firstStatus.push({ SPD: code.slice(9, 12) });
        firstStatus.push({ CHARA: code.slice(-1) });
        console.log(firstStatus);

        Quagga.stop();

        modal.style.display = "block";
        hpStats.textContent = firstStatus[0];
    });
});

console.log(modal, code);
