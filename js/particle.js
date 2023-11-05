const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.opacity = Math.random();
    }

    update() {
        this.y -= this.speed;
        if (this.y <= 0) {
            this.y = canvas.height;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(${this.color.join(',')}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
const numberOfParticles = 15;

// 사용자가 지정한 색상 배열
const userDefinedColors = [
    [227, 237, 141], //더연한 연두색
    [162, 217, 73], //연두색 
    
];

for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 20 + 15; // 크기를 10에서 30 사이의 무작위 값으로 변경
    const speed = Math.random() * 0.5 + 0.2;
    const color = userDefinedColors[Math.floor(Math.random() * userDefinedColors.length)];

    particles.push(new Particle(x, y, size, speed, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();