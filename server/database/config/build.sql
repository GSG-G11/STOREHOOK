BEGIN;
DROP TABLE IF EXISTS categories,products CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL
 
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  description VARCHAR(125) NOT NULL,
  price INT NOT NULL,
  image text NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)

);
insert into categories (name) values ('Electronics'),('Iphone'),('Food'),('Books');
insert into products (name,description,price,image,category_id) values ('Iphone','iphone is the best phone','200','https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',2),
 ('Samsung','Samsung is the best phone','1000','https://images.unsplash.com/photo-1643101809542-6454520860f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=806',1),
  ('Nokia','Nokia is the best phone','1000','https://images.unsplash.com/photo-1643101809542-6454520860f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=806',1),
   ('Sony','Sony is the best phone','1000','https://images.unsplash.com/photo-1643101809542-6454520860f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=806',1),
 ('Food','Nokia is the best phone','400','https://images.unsplash.com/photo-1643101453249-d9eae79700e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',3), 
 ('Book','Sony is the best phone','900','https://images.unsplash.com/photo-1643101451925-1268efaec21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',4);


COMMIT;