
const name = "Andrew";

function meow(name) {
    console.log(name);
}

meow('Darcey');

module.exports.name = name;
module.exports.meow = meow;

console.log(module);