const panels = document.querySelectorAll('.panel') /* seleccionar todos los elementos con esa clase */


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
        console.log(panel)
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
