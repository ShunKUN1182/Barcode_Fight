const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#resetBtn");

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

        Quagga.stop();

        modal.style.display = "block";
    });
});

console.log(modal, code);
