// import fetch from "node-fetch";

// const express = require("express");
// const fetch = require("node-fetch");

import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

app.use(cors());

const auth = "yNkr33PDuKEdmBq3IenKKI4DFk0glHJe";
// const searchURL = `https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp?authKey=${auth}&returnType=JSON&outType=1&pageNum=1&pageSize=20&srchTraStDt=20141001&srchTraEndDt=20141231&sort=ASC&sortCol=TOT_FXNUM`;
const searchURL01 = `https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_2.jsp?returnType=JSON&authKey=${auth}&srchTrprId=AIG20220000380099&srchTrprDegr=2&outType=2&srchTorgId=default`;
const searchURL02 = `https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_4.jsp?returnType=JSON&authKey=${auth}&srchTrprId=AIG20220000380099&srchTrprDegr=2&outType=2`;

app.get("/data", async (req, res) => {
  try {
    const response01 = await fetch(searchURL01);
    const response02 = await fetch(searchURL02);

    const data01 = await response01.json();
    const data02 = await response02.json();

    const responseData = {
      data01: data01,
      data02: data02,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
