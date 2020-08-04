import mongoose from "mongoose";
import ListSchema from "../models/List";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board'
import TaskSchema from "../models/Task"
class DbContext {
  Lists = mongoose.model("Lists", ListSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Boards", BoardSchema);
  Tasks = mongoose.model("Tasks", TaskSchema);

}

export const dbContext = new DbContext();
