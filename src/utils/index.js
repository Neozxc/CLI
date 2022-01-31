// ===== MORNINGS EXAMPLE =====

// const sayHello = () => {
//     console.log("Hello World");
// };

// sayHello();


// // Built into Node, type of application and what application it is running.
// console.log(process.argv);

// const movieArray = [];

// class Movie {

//     // Template to pass some data later on
//     constructor(title, actor = "N/A") {
//         this.title = title;
//         this.actor = actor;
//     }


//     add() {
//         movieArray.push(this);
//     }
// };

// module.exports = {
//     Movie,
//     movieArray
// };

// ===== MORNINGS EXAMPLE =====


// ===== TASK =====


// Define empty array;
const gamesArray = [];

// Make class
class Games {
    // Make constructor
    constructor(game, type, year, age) {
        this.game = game;
        this.type = type;
        this.year = year;
        this.age = age;
    };

    // Function
    add() {
        gamesArray.push(this);
    };
};

// Export it
module.exports = {
    Games,
    gamesArray
}