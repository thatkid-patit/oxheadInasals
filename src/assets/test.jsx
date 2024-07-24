import { assets } from './assets'

export const category = [
    {
        id: 1,
        name: "Beef",
        image: assets.beef_menu
    },
    {
        id: 2,
        name: "Pork",
        image: assets.pork_menu
    },
    {
        id: 3,
        name: "Chicken",
        image: assets.chicken_menu
    },
    {
        id: 4,
        name: "Seafood",
        image: assets.seafood_menu
    },
    {
        id: 5,
        name: "Dessert",
        image: assets.dessert_menu
    },
    {
        id: 6,
        name: "Beverage",
        image: assets.beverages_menu
    }
];

export const order_status = [
    {
        id: 1,
        name: "To Prepare"
    },
    {
        id: 2,
        name: "To Dispatch"
    },
    {
        id: 3,
        name: "To Pick Up"
    },
    {
        id: 4,
        name: "To Receive"
    },
    {
        id: 5,
        name: "Completed"
    },
    {
        id: 6,
        name: "Cancelled"
    },
    {
        id: 7,
        name: "Return/Refund"
    }
]

export const products = [
    {
        id: 1,
        name: "Grilled Beef Burgers",
        category_id: 1,
        description: "Juicy beef patty with lettuce, tomato, red onion, and signature sauce on a brioche bun",
        price: 200,
        image: assets.beef_1
    },
    {
        id: 2,
        name: "Grilled Beef Kebabs",
        category_id: 1,
        description: "Succulent beef cubes marinated in a blend of herbs and spices, skewered with colorful bell peppers, onions, and cherry tomatoes. Grilled to perfection for a smoky, savory taste",
        price: 250,
        image: assets.beef_2
    },
    {
        id: 3,
        name: "Grilled Beef Steak",
        category_id: 1,
        description: "An exceptionally tender cut of beef, the filet mignon is lightly seasoned and grilled to perfection. Served with a side of creamy béarnaise sauce",
        price: 650,
        image: assets.beef_3
    },
    {
        id: 4,
        name: "Grilled Ribeye Steak",
        category_id: 1,
        description: "A juicy, well-marbled ribeye steak, seasoned with a blend of salt, pepper, and garlic, grilled to your preferred doneness. Served with a side of herb-infused butter",
        price: 600,
        image: assets.beef_4
    },
    {
        id: 5,
        name: "Grilled BBQ Pork Ribs",
        category_id: 2,
        description: "Fall-off-the-bone tender pork ribs, slow-cooked and grilled to perfection. Smothered in our signature smoky BBQ sauce, these ribs are a true crowd-pleaser. Served with a side of coleslaw and cornbread",
        price: 450,
        image: assets.pork_1
    },
    {
        id: 6,
        name: "Grilled Pork Chops",
        category_id: 2,
        description: "",
        price: 350,
        image: assets.pork_2
    },
    {
        id: 7,
        name: "Grilled Pork Skewers",
        category_id: 2,
        description: "Tender chunks of marinated pork, skewered with colorful bell peppers, onions, and cherry tomatoes. Grilled to perfection and served with a side of garlic herb rice and a fresh garden salad",
        price: 200,
        image: assets.Pork_3
    },
    {
        id: 8,
        name: "Grilled Chicken Kebabs",
        category_id: 3,
        description: "Juicy, marinated chicken pieces skewered with colorful bell peppers, onions, and cherry tomatoes. Grilled to perfection and served with a side of fluffy rice pilaf and a fresh garden salad",
        price: 150,
        image: assets.chicken_1
    },
    {
        id: 9,
        name: "Grilled Chicken Tacos",
        category_id: 3,
        description: "Tender grilled chicken strips seasoned with Mexican spices, served in soft corn tortillas. Topped with fresh salsa, chopped cilantro, diced onions, and a squeeze of lime. Accompanied by a side of guacamole and refried beans",
        price: 100,
        image: assets.chicken_2
    },
    {
        id: 10,
        name: "Grilled Lemon Herb Chicken",
        category_id: 3,
        description: "Tender chicken breasts marinated in fresh lemon juice, garlic, and a blend of aromatic herbs, grilled to perfection for a zesty and flavorful dish",
        price: 250,
        image: assets.chicken_3
    },
    {
        id: 11,
        name: "Grilled Boneless Bangus",
        category_id: 4,
        description: "Flavorful boneless milkfish marinated in tangy calamansi juice and garlic, grilled to perfection for a tender and savory seafood delight",
        price: 250,
        image: assets.seafood_1
    },
    {
        id: 12,
        name: "Grilled Lemon Garlic Shrimp",
        category_id: 4,
        description: "Plump shrimp marinated in a zesty blend of fresh lemon juice, minced garlic, and herbs, grilled to succulent perfection for a burst of citrusy and savory flavors in every bite",
        price: 300,
        image: assets.seafood_2
    },
    {
        id: 13,
        name: "Grilled Lobster Tails",
        category_id: 4,
        description: "Delicately seasoned lobster tails, grilled to perfection to enhance their natural sweetness and tender texture, creating a luxurious and flavorful seafood experience",
        price: 500,
        image: assets.seafood_3
    },
    {
        id: 14,
        name: "Grilled Salmon Herb Butter",
        category_id: 4,
        description: "Flame-grilled salmon fillet topped with a luscious herb-infused butter, enhancing its natural flavors with a perfect balance of savory herbs and rich buttery goodness",
        price: 600,
        image: assets.seafood_4
    },
    {
        id: 15,
        name: "Grilled Peaches",
        category_id: 5,
        description: "Ripe peaches grilled to caramelized perfection, their natural sweetness enhanced by the smoky char from the grill. Ideal as a delightful standalone dessert or paired with ice cream for a decadent treat",
        price: 80,
        image: assets.dessert_1
    },
    {
        id: 16,
        name: "Grilled Pineapple Honey Cinnamon",
        category_id: 5,
        description: "Juicy pineapple slices grilled to caramelized perfection, drizzled with honey and dusted with cinnamon for a delightful blend of sweet and spicy flavors, perfect as a refreshing dessert or a tasty side dish",
        price: 80,
        image: assets.dessert_2
    },
    {
        id: 17,
        name: "Leche Flan",
        category_id: 5,
        description: "Rich and creamy flan steamed to silky perfection. with smooth texture and caramelized top, a decadent treat that melts in your mouth with each spoonful",
        price: 60,
        image: assets.dessert_3
    },
    {
        id: 18, 
        name: "Mango Graham",
        category_id: 5,
        description: "A delightful dessert made with layers of sweet ripe mangoes, crushed graham crackers, and creamy condensed milk. This no-bake treat offers a perfect blend of fruity sweetness and creamy texture, ideal for satisfying your dessert cravings",
        price: 60,
        image: assets.dessert_4
    },
    {
        id: 19,
        name: "Cucumber Mint",
        category_id: 6,
        description: "A refreshing and invigorating drink infused with crisp cucumber slices and fresh mint leaves, offering a cool and revitalizing taste that complements any grilled dish perfectly",
        price: 50,
        image: assets.beverage_1
    },
    {
        id: 20,
        name: "Fresh Lemonade",
        category_id: 6,
        description: "A classic and thirst-quenching beverage made from freshly squeezed lemons, balanced with just the right amount of sweetness, served chilled for a refreshing complement to your grilled favorites",
        price: 50,
        image: assets.beverage_2
    },
    {
        id: 21,
        name: "Fruit Punch",
        category_id: 6,
        description: "A vibrant and fruity beverage bursting with flavors of tropical fruits, perfectly blended to refresh and complement your dining experience",
        price: 50,
        image: assets.beverage_3
    },
    {
        id: 22,
        name: "Iced Tead",
        category_id: 6,
        description: "A cool and refreshing iced tea brewed to perfection, offering a crisp blend of black tea infused with hints of citrus and served over ice, ideal for enjoying alongside your grilled delights",
        price: 50,
        image: assets.beverage_4
    },
    {
        id: 23,
        name: "Sparkling Water",
        category_id: 6,
        description: "Effervescent and refreshing sparkling water served chilled, offering a crisp and clean taste that provides a delightful palate cleanser between bites of your grilled dishes",
        price: 40,
        image: assets.beverage_5
    }
]

export const vouchers = [
    {
        id: 1,
        code: "qwerty10",
        description: "first order",
        value: .15,
        cap: 65,
        use_chance: 1
    },
    {
        id: 2,
        code: "qwerty11",
        description: "birthday",
        value: .10,
        cap: 100,
        use_chance: 1
    },
    {
        id: 3,
        code: "qwerty12",
        description: "loyalty",
        value: .08,
        cap: 50,
        use_chance: 3
    }
]