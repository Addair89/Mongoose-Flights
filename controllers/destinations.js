const Flight = require("../models/flight");
const Ticket = require("../models/tickets");

const update = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  flight.destinations.push(req.body);
  try {
    await flight.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect(`/flights/${flight._id}`);
};

const showAsc = async (req, res) => {
  let flight = await Flight.findById(req.params.id);
  flight.destinations.sort((a, b) => {
    return a.arrival.getTime() + b.arrival.getTime();
  });
  let ticket = await Ticket.find({ flight: flight._id });
  res.render("flights/show", {
    flight,
    ticket,
    title: "Flight",
  });
};
const showDsc = async (req, res) => {
  let flight = await Flight.findById(req.params.id);
  flight.destinations.sort((a, b) => {
    return a.arrival.getTime() - b.arrival.getTime();
  });
  let ticket = await Ticket.find({ flight: flight._id });
  res.render(`flights/show`, {
    flight,
    ticket,
    title: "Flight",
  });
};

module.exports = {
  update,
  showAsc,
  showDsc,
};
