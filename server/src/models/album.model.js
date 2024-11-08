import mongoose from "mongoose";

const albumScehma = new mongoose.Schema(
  {
    title: { type: "string", required: true },
    artist: { type: "string", required: true },
    imageUrl: { type: "string", required: true },
    releaseYear: { type: "date", required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  },
  { timestamps: true }
);

export const Album = mongoose.model("Album", albumSchema);
