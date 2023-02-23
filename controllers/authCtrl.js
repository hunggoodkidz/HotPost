const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  register: async (req, res) => {
    try {
      const { fullname, username, phone, email, password, gender } = req.body;
      let newUserName = username.toLowercase().replace(/ /g, "");
      
      console.log(newUserName);

      res.json({ msg: "Registed!" });
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },

  generateAccessToken: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authController;
