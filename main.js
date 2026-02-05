const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => scrollObserver.observe(el));

function showYear(year) {
    const yearBlocks = document.querySelectorAll(".year-block");
    yearBlocks.forEach(block => {
        block.classList.remove("active");
        block.style.display = "none";
    });

    const currentBlock = document.getElementById("year" + year);
    if (currentBlock) {
        currentBlock.style.display = "block";
        setTimeout(() => {
            currentBlock.classList.add("active");
        }, 50);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const modals = {
    form: {
        window: document.getElementById("formModal"),
        btn: document.getElementById("openFormBtn"),
        close: document.querySelector(".close")
    },
    video: {
        window: document.getElementById("videoModal"),
        btn: document.getElementById("openVideoBtn"),
        close: document.querySelector(".close-video")
    },
    nav: {
        window: document.getElementById("navModal"),
        btn: document.getElementById("openNavBtn"),
        close: document.querySelector(".close-nav")
    }
};

function setupModal(modalObj) {
    if (modalObj.btn) {
        modalObj.btn.onclick = () => modalObj.window.style.display = "flex";
    }
    if (modalObj.close) {
        modalObj.close.onclick = () => modalObj.window.style.display = "none";
    }
}

Object.values(modals).forEach(setupModal);

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        modals.nav.window.style.display = "none";
        if (link.getAttribute('href') === "#Meropri") {
            showYear('2025');
        }
    });
});

window.addEventListener("click", (event) => {
    Object.values(modals).forEach(m => {
        if (event.target === m.window) {
            m.window.style.display = "none";
        }
    });
});