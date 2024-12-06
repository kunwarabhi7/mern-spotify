import cloudinary from "../lib/cloudniary.js";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";

//helper functions for cloudniary uploads
const uploadToCloudNiary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log("Error uploading file: " + error.message);
    throw new Error(error.message);
  }
};

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload all files" });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudNiary(audioFile);
    const imageUrl = await uploadToCloudNiary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    // if song belongs to an album, update the album's songs array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }
    res.status(201).json(song);
  } catch (error) {
    console.log("Error in createSong", error);
    next(error);
  }
};

export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;

    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    // if song belongs to an album, update the album's songs array
    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song._id },
      });
    }

    await Song.findByIdAndDelete(id);

    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.log("Error in deleteSong backend", error);
    next(error);
  }
};

export const createAlbum = async (req, res, next) => {
  try {
    const { title, artist, releseYear } = req.body;
    const imageFile = req.files;
    const imageUrl = await uploadToCloudNiary(imageFile);

    const album = new Album({
      title,
      artist,
      imageUrl,
      releseYear,
    });
    await album.save();
    res.status(201).json({ message: "SUCCESS", album });
  } catch (error) {
    console.log("Error in Creating Album", error);
    next(error);
  }
};

export const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Song.deleteMany({ albumId: id });
    await Album.findByIdAndDelete(id);
    res.status(200).json({ message: "SUCCESS Album Deleted Successfully" });
  } catch (error) {
    console.log("Error in deketeAlbum", error.message);
    next(error);
  }
};

export const checkAdmin = async (req, res, next) => {
  res.status(200).json({ admin: true });
};
