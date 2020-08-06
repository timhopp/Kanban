import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ListsService {
  async find(query = {}) {
    let list = await dbContext.Lists.find(query);
    return list;
  }


  async getById(id) {
    let data = await dbContext.Lists.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
    // , creatorEmail: userEmail 
  }
  async create(rawData) {
    let data = await dbContext.Lists.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Lists.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this list");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Lists.findOneAndRemove({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this list");
    }
  }

  async getByBoardId(id) {
    let data = await dbContext.Lists.find({ boardId: id });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board.");
    }
    return data;
  }
}
export const listsService = new ListsService();