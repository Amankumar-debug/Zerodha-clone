require("dotenv").config();
const express= require("express");
const app=express();
const mongoose= require("mongoose");
const Holdings=require("./models/holdings")
const Positions=require("./models/positions")
const  OrdersModel=require("./models/orders")
const User=require("./models/user")
const cors=require("cors");
const bodyparser =require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const PORT=process.env.PORT || 3002;
const URL =process.env.MONGO_URL;

app.use(cors({ origin: ["http://localhost:3000","http://localhost:3001"] }));
app.use(bodyparser.json());
main()
.then(()=>{
    console.log("connection succes");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
     await mongoose.connect(URL);
}

// app.get("/addholdings",async(req,res)=>{
//     let tempHoldings= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

   
//   tempHoldings.forEach((item)=>{
//     let newHolding= new Positions({
//        product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net:item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });

//     newHolding.save();
//   })

//   res.send("done")
// })

app.get("/allHoldings", async(req,res)=>{
    let allHoldings= await Holdings.find();
    res.json(allHoldings);
}
)

app.get("/allPositions", async(req,res)=>{
    let allPositions= await Positions.find();
    res.json(allPositions);
}
)

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});
app.get("/allOrders", async(req,res)=>{
    let allOrders= await OrdersModel.find();
    res.json(allOrders);
}
)

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, username }, "simplejwtsecret", { expiresIn: "1d" });

    res.json({ token, user: { id: newUser._id, username, email } });
  } catch (err) {
    console.error("Signup error:", err); // <--- this will show exact error
    res.status(500).json({ msg: "Server error" });
  }
});


app.listen(PORT,()=>{
    console.log(`server is listen to ${PORT}`)
})