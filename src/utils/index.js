const sayHello = () => {
    console.log("Hello World");
};

sayHello();


// Built into Node, type of application and what application it is running.
console.log(process.argv);

const movieArray = [];

class Movie {

    // Template to pass some data later on
    constructor(title, actor = "N/A") {
        this.title = title;
        this.actor = actor;
    }


    add() {
        movieArray.push(this);
    }
};

module.expors = {
    Movie,
    movieArray
};