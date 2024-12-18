function hello() {
    console.log('Skill');
}
try {
    hello(); // mistake=> function name is misspelled(hello();)
} catch (error) {
    console.error('Ошибка в коде:', error); // log the error in the console
}
console.log('complete');