import express from "express";
import api from "./api/api.js";
import firebase from "firebase";
import axios from "axios";

const app = express();
app.use(express.json());
app.use("/", api);

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxIb9ukRFMH0T-axysXvAgJ-NLMMx-f7g",
  authDomain: "pos-ea5c9.firebaseapp.com",
  databaseURL:
    "https://pos-ea5c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pos-ea5c9",
  storageBucket: "pos-ea5c9.appspot.com",
  messagingSenderId: "655303904063",
  appId: "1:655303904063:web:69bb51e829f4f2c1d6a18a",
  measurementId: "G-H9PEM4WQFN",
};
firebase.initializeApp(firebaseConfig);

const PORT = process.env.PORT || 3000;

//add REST method to add new data
app.post("/", (req, res) => {
  const { name } = req.body;
  const data = { name };

  axios
    .post(
      "https://pos-ea5c9-default-rtdb.asia-southeast1.firebasedatabase.app",
      data,
    )
    .then((res) => {
      //add restful api response
      res.json({ message: "success", data: res.data });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error adding data", error: err.toString() });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
