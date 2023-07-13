import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("pizzas");

  const [{ foodItems }, dispatch] = useStateValue();
  console.log(filter)
  const newItems=[{
    "imageURL": "https://www.dominos.co.in/files/items/Farmhouse.jpg",
    
    "qty": 1,
    "id": "1686552770738",
    "price": "250",
    "category": "pizzas",
    "title": "FARM"
},{
  "price": "200",
 
  "qty": 1,
  "category": "pizzas",
  "id": "1656662536855",
  "imageURL": "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
  "title": "PANEER"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
  
  "qty": 1,
  "id": "1686552770738",
  "price": "270",
  "category": "pizzas",
  "title": "TANDOORI"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Fresh_Veggie.jpg",
  
  "qty": 1,
  "id": "1686552770738",
  "price": "200",
  "category": "pizzas",
  "title": "VEGGIE"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
  
  "qty": 1,
  "id": "1686552770738",
  "price": "220",
  "category": "pizzas",
  "title": " PARADISE"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Farmhouse.jpg",
  
  "qty": 1,
  "id": "1686552770738",
  "price": "190",
  "category": "pizzas",
  "title": "FARM"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
  
  "qty": 1,
  "id": "1686552770738",
  "price": "230",
  "category": "pizzas",
  "title": "MAKHANI"
},

{
  "imageURL": "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "320",
  "category": "pizzas",
  "title": "BARBECUE "
},{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(14).png",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "300",
  "category": "pizzas",
  "title": " GOLDEN"
},{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "330",
  "category": " Pizzas",
  "title": "SUPREME"
},{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(11).png",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "350",
  "category": "Pizzas",
  "title": "DOMINATOR"
},{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(15).png",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "320",
  "category": "Pizzas",
  "title": "CHICKEN"
},{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png",
  
  "qty": 1,
  "id": "168655277073",
  "price": "380",
  "category": "Pizzas",
  "title": " SAUSAGE"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/Margherit.jpg",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "300",
  "category": "Pizzas",
  "title": "MARGHERITA"
},
{
  "imageURL": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png",
  
  "qty": 1,
  "id": "1686552770739",
  "price": "360",
  "category": "Pizzas",
  "title": " PEPPERONI"
}
];
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={newItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
