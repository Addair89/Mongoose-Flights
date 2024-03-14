const Flight = require("../models/flight");
const Ticket = require("../models/tickets");

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
  let ticket = await Ticket.find({ flight: flight._id });
  res.render("flights/index", {
    flights,
    ticket,
    title: "flight",
  });
};
const showDsc = async (req, res) => {
  let flights = await Flight.find({}).sort({ departs: -1 });
  let ticket = await Ticket.find({ flight: flight._id });
  res.render("flights/index", {
    flights,
    ticket,
    title: "Flight",
  });
};

const showOne = async (req, res) => {
  let flight = await Flight.findById(req.params.id);
  let ticket = await Ticket.find({ flight: flight._id });

  res.render("flights/show", {
    flight,
    ticket,
    title: "Flight",
  });
};

const ticket = async (req, res) => {
  let flight = await Flight.findById(req.params.id);
  res.render("tickets/new", {
    flight,
    title: "Buy Ticket",
  });
};
module.exports = {
  index,
  new: addFlight,
  create,
  showAsc,
  showDsc,
  showOne,
  ticket,
};
