import connection from "../../../helpers/db";

const Query = function () {
  this.query = [];

  this.getQuery = (result) => {
    result(null, this.query);
  };

  this.pushToQuery = (soldierId, result) => {
    this.query.push(soldierId);
    result(null, "pushed to query");
  };

  this.clearQuery = (result) => {
    this.query = [];
    result(null, "query cleared");
  };
};

export default Query;
