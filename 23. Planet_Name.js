function getPlanetId(planetName) {
    
    const planetIds = {
        "mercury": 1,
        "venus": 2,
        "earth": 3,
        "mars": 4,
        "jupiter": 5,
        "saturn": 6,
        "uranus": 7,
        "neptune": 8
    };

   
    let lowercasePlanetName = planetName.toLowerCase();

    
    if (lowercasePlanetName in planetIds) {
        
        return planetIds[lowercasePlanetName];
    } else {
        
        return "Planet not found";
    }
}