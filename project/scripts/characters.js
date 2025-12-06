const characters = [
  {
    name: "Nyra of the present",
    age: "24",
    description: "Nyra is a simple, empathetic, and studious girl. She wants to study archaeology, and her biggest weakness is not being able to say no.",
    imageUrl:
    "images/nyra-present-c.webp"
  },
  {
    name: "Nyra from the past",
    age: "24",
    description: "Nyra from the past is a girl with a very tough childhood; she is a warrior, strong-willed, and her greatest weakness is her lack of empathy for the world.",
    imageUrl:
    "images/nyra-past-c.webp"
  },
  {
    name: "Sael",
    age: "???",
    description: "Sael is a boy we don't know much about yet; we know he lived long before the Nyra of the past. But he carries an enormous weight on his shoulders.",
    imageUrl:
    "images/sael.webp"
  },
  {
    name: "Rowen",
    age: "25",
    description: "Rowen is a guy, very cheerful and self-confident, he has nothing magical about him besides his nice personality and his sense of humor",
    imageUrl:
    "images/rowen.webp"
  },
  {
    name: "Nyra's mom",
    age: "45",
    description: "Is a very hard-working woman; she'll go against the grain if necessary. You see her and you can see the love she has for her children.",
    imageUrl:
    "images/mama-nyra.webp"
  },
  {
    name: "Nyra's younger brother",
    age: "12",
    description: "He's a very intelligent, loving little boy who adores video games. He may be small, but he understands everything that's going on around him.",
    imageUrl:
    "images/hermano-nyra.webp"
  },
  {
    name: "Carla",
    age: "24",
    description: "Carla is Nyra's childhood friend from the future. She's a tough girl who would put her life on the line for those she loves without hesitation.",
    imageUrl:
    "images/carla.webp"
  },
  {
    name: "Lyna",
    age: "23",
    description: "Lyna is a girl who loves physics and understanding the logic of the world. She may seem serious, but she's actually incredibly kind and has a heart of gold.",
    imageUrl:
    "images/lyna.webp"
  },
  {
    name: "Riven",
    age: "???",
    description: "He carries many burdens from his long life. He is cynical, sarcastic, and very explosive. But he is loyal and protects those he loves.",
    imageUrl:
    "images/riven.webp"
  },
  {
    name: "Auren",
    age: "???",
    description: "He has a strong connection with nature, is wise, and even a bit bohemian. He always has a different and deeper perspective on things.",
    imageUrl:
    "images/auren.webp"
  },
  {
    name: "Caelum",
    age: "???",
    description: "He is one of those people who tell the truth with an ironic smile. He carries the contradiction of his fear of death, he knows how to laugh at himself and others.",
    imageUrl:
    "images/caelum.webp"
  },
  {
    name: "Lioren",
    age: "???",
    description: "He's become a hardcore gamer and is always trying out new things. He tries to enjoy everything to the fullest because, deep down, he knows his curse is never-ending.",
    imageUrl:
    "images/lioren.webp"
  },
  {
    name: "The dough",
    age: "???",
    description: "We know little about her; she appears to destroy and corrupt everything in her path, but perhaps she is not as simple as she seems.",
    imageUrl:
    "images/villain-complete.webp"
  }

];

const container = document.querySelector(".container-character");

function createCharacterCards(chars) {
  container.innerHTML = "";

  chars.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("flip-card");

    if (character.name === "The dough") {
      card.classList.add("villain");
    }

    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <h3>${character.name}</h3>
          <p><strong>Age:</strong> ${character.age}</p>
          <p>${character.description}</p>
        </div>

        <div class="flip-back">
          <img src="${character.imageUrl}" alt="${character.name}" loading="lazy">
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flip-active");
    });

    container.appendChild(card);
  });
}

createCharacterCards(characters);