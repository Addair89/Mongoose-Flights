const Flight = require("../models/flight");
const Ticket = require("../models/tickets");

const create = async (req, res) => {
  try {
    req.body.flight = req.params.id;
    console.log(req.body);
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  const flight = await Flight.findById(ticket.flight);
  await Ticket.deleteOne(ticket);
  res.redirect(`/flights/${flight._id}`);
};
module.exports = {
  create,
  delete: deleteOne,
};
