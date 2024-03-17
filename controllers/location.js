import locationModel from "../models/location.js";

const createLocation = async (req, res) => {
  const userId = req.session.userId;
  const { longitude, latitude } = req.body;

  try {
    const location = await locationModel.create({
      longitude,
      latitude,
      userId,
    });

    res.status(201).json(location);
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
};

const getUserLocations = async (req, res) => {
  const userId = req.session.userId;

  try {
    const locations = await locationModel.find({ userId });

    res.status(201).json(locations);
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
};

export { createLocation, getUserLocations };
