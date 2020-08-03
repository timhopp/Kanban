import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ListService {
  async find(query={}) {
    let list = await dbContext.List.find(query);
    return list;
  }
  async findById(id) {
    let list = await dbContext.List.findById(id);
    if (!list) {
      throw new BadRequest("Invalid Id");
    }
    return list;
  }
  async create(rawData) {
    let data = await dbContext.List.create(rawData)
    return data
  }
}

export const listService = new ListService();