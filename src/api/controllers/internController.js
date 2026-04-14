const Intern = require("../../domain/models/Intern");
exports.createIntern = async (req, res) => {
  try {
    const intern = new Intern(req.body);
    const savedIntern = await intern.save();
    res.status(201).json(savedIntern);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllInterns = async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateInternAge = async (req, res) => {
  try {
    const updatedIntern = await Intern.findOneAndUpdate(
      { email: req.params.email },
      { age: req.body.age },
      { new: true }
    );

    if (!updatedIntern) {
      return res.status(404).json({ message: "Intern not found" });
    }

    res.json(updatedIntern);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getInternsAbove20 = async (req, res) => {
  try {
    const interns = await Intern.find({
      age: { $gt: 20 }
    });

    res.json(interns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getEngineeringInterns = async (req, res) => {
  try {

    const interns = await Intern.find({
      department: "Engineering"
    });

    res.json(interns);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getInternsAgeRange = async (req, res) => {
  try {

    const interns = await Intern.find({
      age: { $gte: 20, $lte: 25 }
    });

    res.json(interns);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.countInterns = async (req, res) => {
  try {

    const result = await Intern.aggregate([
      { $count: "totalInterns" }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.averageInternAge = async (req, res) => {
  try {

    const result = await Intern.aggregate([
      {
        $group: {
          _id: null,
          avgAge: { $avg: "$age" }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.maxInternAge = async (req, res) => {
  try {

    const result = await Intern.aggregate([
      {
        $group: {
          _id: null,
          maxAge: { $max: "$age" }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};