const slider = document.getElementById("slider");
const listSlider = [{
    name: 'Chicago',
    content: "Thank you, Chicago - A night we won't forget.",
    url: "./assets/img/slides/chicago.jpg"
}, {
    name: "Los Angeles",
    content: "We had the best time playing at Venice Beach!",
    url: "./assets/img/slides/la.jpg"
}, {
    name: "New York",
    content: "The atmosphere in New York is lorem ipsum.",
    url: "./assets/img/slides/ny.jpg"
}];

function setSlider(i) {
    setInterval(() => {
        let key = listSlider[i];
        slider.style.background = `url("${key.url}") top center/cover no-repeat`;
        slider.innerHTML = `
        <div class="text-content">
        <h2 class="text-heading">${key.name}</h2>
        <div class="text-description">${key.content}</div>
    </div>`;
        i++;
        if (i == 3) i = 0;
    }, 4000);
}
setSlider(0);