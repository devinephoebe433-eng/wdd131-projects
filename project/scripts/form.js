// Song Array
const songs = [
    { id: "s1", name: "Unsaid Emily" },
    { id: "s2", name: "Dusk Till Dawn" },
    { id: "s3", name: "Never Be The Same" },
    { id: "s4", name: "Photograph" },
    { id: "s5", name: "Zoo" },
    { id: "s6", name: "Love Is Wicked" },
    { id: "s7", name: "Devine" }
];

// Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Populate Select
    const select = document.getElementById("product");

    if (select) {
        songs.forEach(song => {
            const option = document.createElement("option");
            option.value = song.id;
            option.textContent = song.name;
            select.appendChild(option);
        });
    }

    // Review Counter
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count = Number(count) + 1;

        localStorage.setItem("reviewCount", count);

        const counter = document.getElementById("counter");
        if (counter) {
            counter.textContent = count;
        }
    }

});