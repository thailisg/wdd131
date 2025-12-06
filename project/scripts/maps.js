//Javascript to manage the map view in map.html

const maps = [
    {
        name: "Map regional of Anima Umbrae",
        small: "images/map-regional-small.webp",
        large: "images/map-regional.webp",
        description: "Map of the small region where the story takes place"
    },
    {
        name: "Sylvaras University, in the present",
        small: "images/uni-after-small.webp",
        large: "images/uni-after.webp",
        description: "The university in the present 2025"
    },
    {
        name: "Sylvaras University, year 1100",
        small: "images/uni-bef-small.webp",
        large: "images/uni-bef.webp",
        description: "The site where the university was located in the year 1100"
    }
];

const imgContainer = document.querySelector(".container-img");
const modal = document.getElementById("map-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close-modal");

function createMapCards(maps) {
    imgContainer.innerHTML = "";

    maps.forEach(map => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
            <img src="${map.small}" alt="${map.name}" loading="lazy" class="map-img">
            <figcaption>
                <h3>${map.name}</h3>
                <p>${map.description}</p>
            </figcaption>
        `;

        figure.querySelector("img").addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = map.large;
        });

        imgContainer.appendChild(figure);
    });
}

createMapCards(maps);

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});