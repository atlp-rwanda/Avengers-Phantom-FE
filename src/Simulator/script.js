mapboxgl.accessToken =
  "pk.eyJ1IjoidW5ydWRhc2luZ3dhIiwiYSI6ImNsMnQ1bDg0MDAxMmozc280dTI2djZ5djQifQ.w9E2i1S-7-33knDQCy523A";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([30.064668765177903, -1.9634880465519402]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position [lng, lat]
    zoom: 13, // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl("top-left"));

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    // profile: 'mapbox/driving'
  });
  map.addControl(directions, "top-left");

  const origin = [30.064668765177903, -1.9634880465519402];
  const destination = [30.092683236105895, -1.9528218321396942];
  // A simple line from origin to destination.

  const route = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [origin, destination],
        },
      },
    ],
  };

  // A single point that animates along the route.
  // Coordinates are initially set to origin.
  const point = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: origin,
        },
      },
    ],
  };

  // Calculate the distance in kilometers between route start/end point.
  const lineDistance = turf.length(route.features[0]);

  const arc = [];
  const steps = 500;
  // Draw an arc between the `origin` & `destination` of the two points
  for (let i = 0; i < lineDistance; i += lineDistance / steps) {
    const segment = turf.along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
  }
  route.features[0].geometry.coordinates = arc;

  // Used to increment the value of the point measurement against the route.
  let counter = 0;

  map.on("load", () => {
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource("route", {
      type: "geojson",
      data: route,
    });

    map.addSource("point", {
      type: "geojson",
      data: point,
    });

    map.addLayer({
      id: "route",
      source: "route",
      type: "line",
      paint: {
        "line-width": 2,
        "line-color": "#007cbf",
      },
    });

    map.addLayer({
      id: "point",
      source: "point",
      type: "symbol",
      layout: {
        // This icon is a part of the Mapbox Streets style.
        // To view all images available in a Mapbox style, open
        // the style in Mapbox Studio and click the "Images" tab.
        // To add a new image to the style at runtime see
        // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
        "icon-image": "bus",
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
      },
    });

    function animate() {
      const start =
        route.features[0].geometry.coordinates[
          counter >= steps ? counter - 1 : counter
        ];
      const end =
        route.features[0].geometry.coordinates[
          counter >= steps ? counter : counter + 1
        ];
      if (!start || !end) return;

      // Update point geometry to a new position based on counter denoting
      // the index to access the arc
      point.features[0].geometry.coordinates =
        route.features[0].geometry.coordinates[counter];

      // Calculate the bearing to ensure the icon is rotated to match the route arc
      // The bearing is calculated between the current point and the next point, except
      // at the end of the arc, which uses the previous point and the current point
      point.features[0].properties.bearing = turf.bearing(
        turf.point(start),
        turf.point(end)
      );

      // Update the source with this new data
      map.getSource("point").setData(point);

      // Request the next frame of animation as long as the end has not been reached
      if (counter < steps) {
        requestAnimationFrame(animate);
      }
      counter = counter + 1;
    }
    document.getElementById("replay").addEventListener("click", () => {
      // Set the coordinates of the original point back to origin
      point.features[0].geometry.coordinates = origin;

      // Update the source layer
      map.getSource("point").setData(point);

      // Reset the counter
      counter = 0;
      // Restart the animation
      animate(counter);
    });

    // Start the animation
    animate(counter);
  });
}
