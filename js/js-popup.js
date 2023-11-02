// let scrollTriggeredImage = document.getElementById('scroll-triggered-image');
// let isAnimating = false;
// const scrollTriggerPosition = 50; // 스크롤 완료 위치


// const bounceBackSpeed = 1; // 다시 돌아오는 속도

// function moveImageOnScroll() {
//     const scrollPosition = window.scrollY;
//     let leftPosition = 65 - (scrollPosition - scrollTriggerPosition) * 0.03;
//     // 이미지가 화면 왼쪽으로 너무 나가지 않도록 최소값을 설정
//     if (leftPosition < 20) {
//         leftPosition = 20;
//     }

//     scrollTriggeredImage.style.left = leftPosition + '%';
// }



// let animationFrameId;

// function handleScroll() {
//     moveImageOnScroll();
//     animationFrameId = requestAnimationFrame(handleScroll);
// }


// window.addEventListener('scroll', () => {
//     if (!animationFrameId) {
//         animationFrameId = requestAnimationFrame(handleScroll);
//     }
// });


// window.addEventListener('load', moveImageOnScroll);