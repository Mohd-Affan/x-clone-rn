export const protectRoute = async (req, res, next) => {
  if (!req.auth().isAuthentucated) {
    return res
      .status(401)
      .json({ message: "Unauthorized- you must be logged in" });
  }
};
