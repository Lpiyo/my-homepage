console.log("홈페이지 로드 완료");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });
    });
});