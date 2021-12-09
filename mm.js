let mixedMessage = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rooms: ["the Kitchen", "the Living Room", "the Utility Room", "the Hallway", "the Landing", "the Main Bedroom", "Kieran's Room", "Esme's Room", "Sophie's Room", "Theo's Room", "the Bathroom","the Cloakroom"],
    companion: ["Steve", "Sophie", "Esme", "Kieran", "Theo"],
    selectRandomWord(words) {
        return words[Math.floor(Math.random() * words.length)];
    },
    generateRandomMessage() {
        const day = this.selectRandomWord(this.days);
        const room = this.selectRandomWord(this.rooms);
        const companion = this.selectRandomWord(this.companion);
        return (`You will clean ${room} on ${day} with ${companion}`);
    }
};

console.log(mixedMessage.generateRandomMessage());
