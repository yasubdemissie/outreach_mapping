export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export function getCurrentLocation() {
  // Check if Geolocation API is available
  if (navigator.geolocation) {
    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Extract latitude and longitude
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude, "Longitude:", longitude);
      },
      (error) => {
        // Handle errors (e.g., permission denied)
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// Call the function to get the location
