function index(req, res) {
  res.json({
    message: "Welcome to CoffeeBreak!",
    documentation_url:"https://github.com/tbduong/CoffeeBreakApp",
    //base_url:
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/coffeespots", description: "Find ALL coffeespots"},
      {method: "GET", path: "/api/coffeespots/:id", description: "Find coffeespot by ID"}
    ]
  });
}
module.exports = {index: index};
