function makeMarquee() {
    const title = "FIFTY Music Festival — November 10–12, Desert Valley";
    const marqueenText = new Array(30).fill(title).join(' — ');
    const marquee = document.querySelector('.marquee span');
    marquee.innerHTML = marqueenText;
}

makeMarquee()