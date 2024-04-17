const docRef = db.collection("service").doc("service center F");

docRef.get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    // Use the data to update your HTML page
    document.getElementById("user-table").textContent = data.someField;
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
