import express from "express";
import BaseController from "../utils/BaseController";
import { tasksService } from "../services/tasksService";
import auth0provider from "@bcwdev/auth0provider";

export class TasksController extends BaseController {
  constructor() {
    super("api/tasks");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .delete('/:id/comments/:commentId', this.deleteComment)
      .post("/:id/comments", this.addComment)
  }

  async getAll(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await tasksService.getAll(req.userInfo.email)
      return res.send(data)
    }
    catch (err) { next(err) }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await tasksService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await tasksService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await tasksService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      await tasksService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }

  async addComment(req, res, next) {
    try {
      let comment = await tasksService.addComment(req.params.id, req.body);
      if (comment) {
        return res.send(comment);
      }
    } catch (error) {
      next(error);
    }
  }
  async deleteComment(req, res, next) {
    try {
      let move = await tasksService.deleteComment(
        req.params.id,
        req.params.commentId
      );
      if (move) {
        res.send("he gone");
      }
    } catch (error) {
      next(error);
    }
  }
}
