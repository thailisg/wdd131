const content = {
    siteName: "This name represents the book in progress 'Anima Umbrae' since the page will be a wiki of the book.",

    sitePurpose: "The site provides a description about the book: synopsis, principal characters, about the world, the general history of the world, and the types of magic that exist.",

    scenarios: `
        Who are the main characters of Anima Umbrae, and what are their roles in the story? <br><br>
        How does the magic system of the world work, and what types of powers exist? <br><br>
        How did the conflict with the antagonist begin, and what are their motives?`,

    colorSchema: `
        <strong>#2d5d1f (forest green):</strong> this color represents nature, old forests, and the magic in the world. This color is the main background of the body.<br><br>
        <strong>#6a6a6a (stone gray):</strong> this color represents the most important tower in the entire story. I will use this color for the header and footer, and maybe for some sections.<br><br>
        <strong>#7b4f2a (ground brown):</strong> this color represents history. I don't know why, but it reminds me of war and harder situations. I will use it for sections and boxes.<br><br>
        <strong>#4a2e17 (dark brown):</strong> I will use this color to create contrast and borders.<br><br>
        <strong>#6B3FA0 (antagonist purple):</strong> this is the color that represents the antagonist. I plan to use it to create contrast in the explanations about the villain, to highlight him better.<br><br>
        <strong>#7C6BCB (crystal purple-blue):</strong> this color represents the most important part of the story, and I will only use it for explanations about the crystal. <br><br>
        <strong>Text colors:</strong> white (#ffffff) and black (#000000).
        `,
    
    typography: "I will use only one font for the entire website: Cinzel. I chose it because it fits well with the atmosphere of the book.",

    wireframe: `
        <p>Wireframe for the homepage (mobile & desktop):</p>
        <img class="img-wireframe" src="images/wireframe-mobile.webp" alt="Wireframe Mobile" loading="lazy">
        <img class="img-wireframe" src="images/wireframe-desktop.webp" alt="Wireframe Desktop" loading="lazy">
    `
}

const sections = document.querySelectorAll('.section-project');

const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

sections.forEach(section => {
    section.addEventListener('click', () => {
        const key = section.dataset.key;
        if (content[key]) {
            modalText.innerHTML = content[key];
            modal.style.display = 'block';
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});