const Flight = require("../models/flight");

const index = async (req, res) => {
    const flights = await Flight.find({});
    flights.forEach((f) => {});
    res.render("flights/index", {
        flights,
        title: "All Flights",
    });
};

const addFlight = (req, res) => {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
    departsDate += `-${dt
        .getDate()
        .toString()
        .padStart(2, "0")}T${dt.toTimeString().slice(0, 5)}`;

    res.render("flights/new", {
        title: "Add a new flight",
        departsDate,
    });
};

const create = async (req, res) => {
    try {
        await Flight.create(req.body);
        res.redirect("flights");
    } catch (error) {
        console.log(error);
    }
};

const showAsc = async (req, res) => {
    let flights = await Flight.find({}).sort({ departs: "asc" });
    console.log(flights);
    res.render("flights/index", {
        flights,
        title: "flight",
    });
};
const showDsc = async (req, res) => {
    let flights = await Flight.find({}).sort({ departs: -1 });
    console.log(flights);
    res.render("flights/index", {
        flights,
        title: "flight",
    });
};
module.exports = {
    index,
    new: addFlight,
    create,
    showAsc,
    showDsc,
};
