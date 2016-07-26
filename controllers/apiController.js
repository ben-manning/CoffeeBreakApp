function index(req, res) {
  res.json({
    message: "Welcome to CoffeeBreak!",
    documentation_url:"https://github.com/tbduong/CoffeeBreakApp",
    base_url: "http://CoffeeBreak.herokuapp.com",
    endpoints:[
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/coffeespots", description: "Find ALL coffee spots"},
      {method: "GET", path: "/api/coffeespots/:coffeespot_id", description: "Find coffee spot by ID"},
      {method: "POST", path: "/api/coffeespots/", description: "Add a new coffee spot"},
      {method: "PUT", path: "/api/coffeespots/:coffeespot_id", description: "Edit an existing coffee spot"},
      {method: "DELETE", path: "/api/coffeespots/:id", description: "Delete coffee spot by ID"},
      
      {method: "GET", path: "/api/locations", description: "Find all locations"},
      {method: "GET", path: "/api/locations/:location_id", description: "Find locations by ID"},
      {method: "POST", path: "/api/locations/", description: "Add a new location"},
      {method: "PUT", path: "/api/locations/:location_id", description: "Edit an existing location"},
      {method: "DELETE", path: "/api/locations/:location_id", description: "Delete location by ID"},

      {method: "GET", path: "/api/locations:/:location_id/coffeespots", description: "Find all coffee spots within a location id"}
    ]
  });
}
module.exports = {index: index};
