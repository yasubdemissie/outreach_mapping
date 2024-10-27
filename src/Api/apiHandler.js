export async function uploadForm(formData) {
  const data = await fetch(
    "https://outreach-mapping-tool-1.onrender.com/upload",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  );

  const res = await data.json();

  if (!res.ok) throw new Error("Error uploading form");

  return { res };
}

export async function getData() {
  try {
    console.log("response");
    // Send GET request to the server
    const response = await fetch(
      "https://outreach-mapping.onrender.com/form/getReachedPeoples"
    );

    // Parse and log the JSON response
    console.log("response");
    if (!response.ok) {
    console.log("response");
    // Check if the response is successful
      const result = await response.json();
      console.log("GET Request Response:", result);
    } else {
    console.log("response");
    console.error("Server responded with an error:", response.status);
    }
  } catch (error) {
    console.log("response");
    console.error("Error fetching data:", error);
  }
}

// Call the async function to execute it
