// ===== MORNINGS EXAMPLE =====

// const { Movie, movieArray } = require("./utils/index");

// const app = (args) => {
//     switch (args[2]) {
//         case "add":
//             const movie = new Movie(args[3], args[4]);
//             movie.add();
//             console.log(movieArray);
//         break;
            
//         default: 
//             console.log("Theres no 'add' command!");
//     }
// };

// app(process.argv);

// ===== MORNINGS EXAMPLE =====


// ===== TASK =====

// Define & Require
const { Games, gamesArray } = require("./utils/index");

const run = (x) => {
    // Switch Statement
    switch(x[2]) {
        case "add":
            // Args:
            // x[3] = game
            // x[4] = type
            // x[5] = year
            // x[6] = age 
            const games = new Games(x[3], x[4], x[5], x[6]);
            // We add to the array
            games.add();
            // We log it
            console.log(gamesArray);

    // Break;
    break;

    // Default:
    default:
        console.log("There was no command ran!");
    };
};

// Run run
run(process.argv);