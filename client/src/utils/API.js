import axios from 'axios';



export default {
  getQBList: function () {
    return axios.get("/api/QBs");
  },

  getUserQBList: function () {
    return axios.get("/api/user/favorites");
  },

  saveUserQB: function (qbData) {
    return axios.post("/api/user/favorites", qbData);
  },

  deleteUserQB: function (id) {
    return axios.delete("/api/user/qb/" + id);
  }
};