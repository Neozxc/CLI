const { Movie, movieArray } = require("./utils/index");

const app = (args) => {
    switch (args[2]) {
        case "add":
            const movie = new Movie(args[3], args[4]);
            movie.add();
            console.log(movieArray);
        break;
            
        default: 
            console.log("Theres no 'add' command!");
    }
};

app(process.argv);