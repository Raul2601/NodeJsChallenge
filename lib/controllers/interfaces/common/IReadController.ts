import express = require("express");

export interface IReadController {
    getAll: express.RequestHandler;
    findById: express.RequestHandler;
}