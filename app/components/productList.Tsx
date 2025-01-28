"use client"
import { useState } from "react";
import {Product} from "@/app/types/Product";
import Header from "@/app/component/Header";
import ProductItem from "@/app/component/ProductItemItem";



export default function Home() {
  const initialTasklist:Product[] = [ {
    "id": 1,
    "name": "Smartphone XYZ",
    "brand": "TechCo",
    "category": "Electronics",
    "price": 499.99,
    "description": "A sleek smartphone with a 6.5-inch OLED display, 128GB storage, and a powerful camera.",
    "availability": true,
    "rating": 4.5,
    "manufacturer": {
     "name": "TechCo Industries",
     "address": {
      "street": "123 Tech Avenue",
      "city": "Silicon Valley",
      "zipcode": "94043"
     }
    }
   }, 
   {
    "id": 2,
    "name": "Wireless Headphones Pro",
    "brand": "SoundMaster",
    "category": "Accessories",
    "price": 129.99,
    "description": "High-quality wireless headphones with noise-canceling feature and 30-hour battery life.",
    "availability": true,
    "rating": 4.8,
    "manufacturer": {
     "name": "SoundMaster Electronics",
     "address": {
      "street": "456 Audio Street",
      "city": "AudioCity",
      "zipcode": "12345"
     }
    }
   }, 
   {
    "id": 3,
    "name": "Laptop Pro 15",
    "brand": "UltraTech",
    "category": "Computers",
    "price": 1499.99,
    "description": "A powerful 15-inch laptop featuring an Intel Core i9 processor, 16GB RAM, and a 1TB SSD.",
    "availability": true,
    "rating": 4.7,
    "manufacturer": {
     "name": "UltraTech Innovations",
     "address": {
      "street": "789 Innovation Parkway",
      "city": "Techopolis",
      "zipcode": "67890"
     }
    }
   }, 
   {
    "id": 4,
    "name": "Smartwatch Fit",
    "brand": "FitTrack",
    "category": "Wearables",
    "price": 199.99,
    "description": "A smartwatch with fitness tracking, heart rate monitoring, and sleep analysis.",
    "availability": false,
    "rating": 4.3,
    "manufacturer": {
     "name": "FitTrack Devices",
     "address": {
      "street": "101 Health Lane",
      "city": "FitCity",
      "zipcode": "54321"
     }
    }
   },
   {
    "id": 5,
    "name": "4K Ultra HD TV 55",
    "brand": "VisionTech",
    "category": "Electronics",
    "price": 799.99,
    "description": "A 55-inch 4K Ultra HD smart TV with HDR and built-in streaming services.",
    "availability": true,
    "rating": 4.6,
    "manufacturer": {
     "name": "VisionTech Electronics",
     "address": {
      "street": "258 Vision Drive",
      "city": "Streamtown",
      "zipcode": "11223"
     }
    }
   } ];
  const [tasklist, setTasklist] = useState<Product[]>(initialTasklist);

  
  return (
    <div>
      <Header title="Task List" total={tasklist.length}/>
      <ul>
        {tasklist.map((obj) => (
          <li key={obj.id}>
            {obj.product}
          </li>
        ))}
      </ul>
    </div>
  )
}