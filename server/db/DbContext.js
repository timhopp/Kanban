import mongoose from "mongoose";
import ListSchema from "../models/List";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board'
class DbContext {
  List = mongoose.model("List", ListSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Board", BoardSchema)
}

export const dbContext = new DbContext();
