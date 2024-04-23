function promptNumbers() {
    for (let i = 0; i < 10; i++) {
        const userInput = prompt(`Введіть число більше 100 (спроба ${i + 1}):`);

        if (userInput === null || userInput === "" || isNaN(userInput)) {
            console.log("Ви не ввели потрібне значення або ввели неправильний формат. Спробуйте ще раз.");
            continue;
        }

        const number = Number(userInput);
        if (number > 100) {
            console.log("Ви ввели число більше 100.");
            break;
        } else {
            console.log("Ви ввели число менше або рівне 100. Введіть число більше 100.");
        }
    }
}

promptNumbers();
