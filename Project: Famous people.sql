CREATE TABLE Singers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, genre TEXT);

INSERT INTO Singers (name, genre) VALUES ("Luther Vandross","R&B");
INSERT INTO Singers (name, genre) VALUES ("Blake Shelton","Country");
INSERT INTO Singers (name, genre) VALUES ("Marvin Gaye","R&B");
INSERT INTO Singers (name, genre) VALUES ("Adam Levine","Pop");
INSERT INTO Singers (name, genre) VALUES ("Stevie Wonder","R&B");
INSERT INTO Singers (name, genre) VALUES ("Gwen Stefani","Pop");
INSERT INTO Singers (name, genre) VALUES ("Bono","Rock");
INSERT INTO Singers (name, genre) VALUES ("Aretha Franklin","Soul");

SELECT * FROM Singers;

CREATE TABLE About_Singers (id INTEGER PRIMARY KEY AUTOINCREMENT, birth_place TEXT, birth_date TEXT, popular_song TEXT);

INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("New York, NY","April 20, 1951", "A HOuse Is Not a  Home");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Ada, OK","June 18, 1976","God's Country");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Washington, D.C., U.S.","April 2, 1939","Sexual Healing");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Los Angeles, CA","March 18, 1979","Sugar");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Saginaw, MI","May 13, 1950","Signed, Sealed, Delivered I'm Yours");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Fullerton, CA","October 3, 1969","Just a Girl");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Dublin, Ireland","May 10, 1960","Pride (In the Name of Love");
INSERT INTO About_Singers (birth_place, birth_date, popular_song) VALUES ("Memphis, TN","March 25, 1942","Respect");

SELECT * FROM About_Singers;

SELECT Singers.name, Singers.genre, About_Singers.popular_song
    FROM Singers
    JOIN About_Singers
    ON Singers.id = About_Singers.id;
