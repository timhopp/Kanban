import express from "express";
import BaseController from "../utils/BaseController";
import { listService } from "../services/listService";
import auth0provider from "@bcwdev/auth0provider";

export class ListController extends BaseController {
  constructor() {
    super("api/lists");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0provider.getAuthorizedUserInfo)
      .post("", this.create);
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await listService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
}
