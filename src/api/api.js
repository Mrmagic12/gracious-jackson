import express from "express";
import { Product } from "./models";

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try{
    const product = await Product.findByPk(req.params.id);
    if(product){
      await product.destroy();
      res.status(204).send();    
    }else{
      res.status(404).json({message: "Product not found"});
    }
  } catch(err){
    res.status(500).json({message: err.message}); 
  }
})