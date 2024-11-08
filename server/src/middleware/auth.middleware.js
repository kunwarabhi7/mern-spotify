import { clerkClient } from "@clerk/express";

export const protectedRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res
      .status(401)
      .json({ error: "Unauthorized - you must be logged in" });
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
    if (!isAdmin) {
      return res
        .status(401)
        .json({ error: "Unauthorized - you must be an Admin" });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Intenal server error", error: error.message });
  }
};
