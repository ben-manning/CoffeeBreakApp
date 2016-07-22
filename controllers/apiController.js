function index(req, res) {
  res.json({
    message: "Welcome to CoffeeBreak!",
    documentation_url:"https://github.com/tbduong/CoffeeBreakApp",
    //base_url:
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

// module.exports.index = index;

module.exports.index = index;
