let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor ;
    const y = event.clientY * scaleFactor ;

    for (let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }

    else {
        document.body.classList.remove("dark-theme")
    }
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal_overlay--loading')
    const success = document.querySelector('.modal_overlay--success')
    loading.classList += " modal_overlay--visible"

    emailjs
        .sendForm(
            'service_ujvh9tn',
            'template_wfvvgtk',
            event.target,
            '2DcCIaf_UdiUt65Q2'
        ).then(() => {

            loading.classList.remove("modal_overlay--visible");
            success.classList += " modal_overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal_overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on Raysonthow@gamil.com"
            )

        })
}

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
document.body.classList += "modal--open"
}

