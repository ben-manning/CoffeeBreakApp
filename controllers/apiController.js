function index(req, res) {
  res.json({
    message: "Welcome to CoffeeBreak!",
    documentation_url:"https://github.com/tbduong/CoffeeBreakApp",
base_url: "http://CoffeeBreak.herokuapp.com",
    endpoints:[
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/coffeespots", description: "Find ALL coffee spots"},
      {method: "GET", path: "/api/coffeespots/:id", description: "Find coffeespot by ID"},
      {method: "POST", path: "/api/coffeespots/", description: "Add a new coffee spot"},
      {method: "DELETE", path: "/api/coffeespots/:id", description: "Delete coffee spot by ID"}
    ]
  });
}
module.exports = {index: index};
