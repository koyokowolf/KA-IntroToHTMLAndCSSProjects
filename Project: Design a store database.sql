Create table inventory (id INTEGER PRIMARY KEY, item TEXT, brand TEXT, color TEXT, size INTEGER, price INTEGER);

INSERT INTO inventory VALUES (1, "Go Walk 4-Merge Sneaker", "Skechers","multi", 10, 43);
INSERT INTO inventory VALUES (2, " Men's Raid Steel Toe Work Boot", "Brahma", "brown", 5.5, 24);
INSERT INTO inventory VALUES (3, "Men's Nubuck Thong Sandal ", "OP", "brown", 7,  8);
INSERT INTO inventory VALUES (4, "Women's Earth Shoe Laci 1", "Earth Spirit", "brown", 7, 20);
INSERT INTO inventory VALUES (5, "Women's Laci T-Strap Sandal", "Earth Spirit","white", 10, 20);
INSERT INTO inventory VALUES (6, "Women's Fashion Ballet Flat", "Earth Spirit","white", 10, 16);
INSERT INTO inventory VALUES (7, "Women's Addi Boot", "Earth spirit", "brown", 10, 30);
INSERT INTO inventory VALUES (8, "Ladies Bungee Sneaker", "Skechers", "black", 7, 30);
INSERT INTO inventory VALUES (9, "Men's 247v2 Sneaker", "New Balance", "black", 5, 55);
INSERT INTO inventory VALUES (10, "Men's Micro G Pursuit Running Shoe", "Under Armour", "Academy Blue(402)/Black", 9, 65);
INSERT INTO inventory VALUES (11, "Men's Lite Racer BYD Running Shoe", "adidas", "black/carbon/black", 12, 60);
INSERT INTO inventory VALUES (12, "Men's Air Monarch IV Cross Trainer", "Nike", "White/Metallic Silver/Midnight Navy", 10, 49);
INSERT INTO inventory VALUES (13, "Women's Vegan 1460 Smooth Black Combat Boot", "Dr. Martens", "Black", 10, 124);
INSERT INTO inventory VALUES (14, "Women's Access Cowboy Boot", "Laredo", "Black/Tan", 11, 145);
INSERT INTO inventory VALUES (15, "Men's Montana Square Toe Boots", "Laredo", "Sand/Chocolate", 7, 110);

Select * from inventory ORDER BY price;

Select SUM(price) from inventory;
