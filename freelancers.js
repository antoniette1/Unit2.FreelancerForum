
// ------ STARTING FREELANCERS -------
const freelancers = [
    { name: "John", price: 25, occupation: "gardener" },
    { name: "Jake", price: 51, occupation: "programmer" },
];

const listings = [{ name: "Jesse", price: 43, occupation: "teacher", render: false },
{ name: "Jean", price: 81, occupation: "teacher", render: false },
{ name: "Jack", price: 43, occupation: "teacher", render: false },
{ name: "Jason", price: 76, occupation: "programmer", render: false },
{ name: "Jay", price: 47, occupation: "teacher", render: false },
{ name: "Jeff", price: 72, occupation: "driver", render: false },
{ name: "Joseph", price: 25, occupation: "hairdresser", render: false },
{ name: "Jackie", price: 100, occupation: "designer", render: false },
{ name: "Joe", price: 90, occupation: "personal trainer", render: false },
{ name: "Jessica", price: 50, occupation: "chef", render: false }
]


// ------- SET INTERVAL -------

const moreFreelancers = setInterval(addFreelancers, 1000);

render();


// ------ CALCULATE AVERAGE PRICE ------
function calculateAverage() {
    return freelancers.reduce((acc, obj) => acc + obj.price, 0) / freelancers.length;
}

// -------RENDER FREELANCERS IN TABLE------
function render() {
    const table = document.querySelector("table tbody");
    freelancers.forEach(FreelanceListing => {
            if (!FreelanceListing.render) {
                    if (!FreelanceListing.hasOwnProperty("price")) {
                            FreelanceListing.price = Math.floor(Math.random() * (100 - 10) + 10);
                    }
                    const tablerow = document.createElement("tr");
                    for (let key in FreelanceListing) {
                            if (key !== "render") {
                                    // for each key-value pair, create a table data
                                    const tabledata = document.createElement("td");
                                    tabledata.innerText = `${key === "price" ? "$" : ""}${FreelanceListing[key]}`;
                                    // then append table data to table row
                                    tablerow.appendChild(tabledata);
                            }
                    }
                    table.appendChild(tablerow);
                    FreelanceListing.render = true;
            }
    })


// ------ PPOPULATE THE AVERAGE PRICE -------
    const avg = document.getElementById("average-price");
    avg.innerText = `The average starting price is \$${calculateAverage().toFixed(2)}`;
}

// method to add freelancers
function addFreelancers() {
    freelancers.push(listings.shift());
    render();
    if (listings.length === 0) {
            clearInterval(moreFreelancers);
    }
}
