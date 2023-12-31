function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const countdownTextElement = document.getElementById("countdown-text");

    // Thời gian cần đếm ngược đến (đặt theo định dạng UTC)
    let countdownDate = new Date("december 31, 2023 17:00:00 UTC").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
        } else {
            countdownTextElement.innerHTML = "Năm mới GIÁP THÌN🐲 Bé Thiện R_K xin chúc mọi người: một năm mới luôn hoan hỉ🥰, sức khỏe bền bỉ💪, công danh hết ý🆗, tiền vào bạc tỉ💵, tiền ra ri rỉ💧, tình yêu thỏa chí💗, vạn sự như ý🫰, luôn cười hi hi😁. Xin  chốt lại là một năm mới bình an💕💕";
            countdownDate += 365 * 24 * 60 * 60 * 1000; // Thêm 1 năm (365 ngày) để bắt đầu đếm ngược cho năm sau
            setTimeout(startCountdown, 1000); // Gọi lại hàm startCountdown sau 1 giây để bắt đầu vòng lặp mới
        }
    }

    // Cập nhật thời gian đếm ngược mỗi 1 giây
    setInterval(updateCountdown, 1000);
}

startCountdown();

document.addEventListener("DOMContentLoaded", function () {
    const particlesContainer = document.getElementById("particles");
    
    for (let i = 0; i < 100; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = Math.random() * window.innerHeight + "px";
        particlesContainer.appendChild(particle);
    }
});


            