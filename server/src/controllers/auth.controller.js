import { User } from "../models/user.model.js";
export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    //check if user already exists
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log("Error in auth callback", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server Error" + error.message,
    });
  }
};
