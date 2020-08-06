import express from "express";
import BaseController from "../utils/BaseController";
import { listsService } from "../services/listsService";
import auth0provider from "@bcwdev/auth0provider";
import { tasksService } from "../services/tasksService";

export class ListsController extends BaseController {
  constructor() {
    super("api/lists");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0provider.getAuthorizedUserInfo)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .get('/:listId/tasks', this.getTasksByList)
      .delete('/:listId/tasks', this.deleteTasksByListId)
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await listsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await listsService.getById(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }
    // req.userInfo.email
  }
  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await listsService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await listsService.delete(req.params.id)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
  async getTasksByList(req, res, next) {
    try {
      let data = await tasksService.getByListId(req.params.listId, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteTasksByListId(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      await tasksService.delete(req.params.id, req.userInfo.email)
      return res.send("Deleted tasks for this list")
    } catch (error) {

    }
  }

}

