BEGIN;
DROP TABLE IF EXISTS categories,products CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL
 
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  image text NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)

);
insert into categories (name) values ('Electronics'),('Phone'),('Food'),('Books');
insert into products (name,description,price,image,category_id) values ('Iphone','iphone is the best phone','200','https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',2),
  ('Samsung','Samsung is the best phone','700','https://images.unsplash.com/photo-1643101809542-6454520860f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=806',1),
  ('Nokia','Nokia is the best phone','1200','https://images.unsplash.com/photo-1643101453249-d9eae79700e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',1),
  ('Sony','Sony is the best phone','500','https://images.unsplash.com/photo-1643101451925-1268efaec21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',1),
  ('Food','Nokia is the best phone','400','https://images.unsplash.com/photo-1649705059757-d648d9504229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',3),
  ('Book','Sony is the best phone','900','https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',4);


insert into products (name,description,price,image,category_id) values 
  ('Iphone','iphone is the best phone','200','https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',2),
  ('Nokia','Nokia is the best phone','700','https://images.unsplash.com/photo-1609500537901-91f5b4c900e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',2),
  ('Sony','Sony is the best phone','1200','https://images.unsplash.com/photo-1518379106190-c4cfbcab0e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',2),
  ('Strawberry cake','Tristique magna sit amet purus gravida quis blandit turpis. Nulla facilisi cras fermentum odio eu feugiat.','500','https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',3),
  ('Burger','burger','400','https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',3),
  ('Book','Book is the best phone','900','https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',4);
  ('Book','Book is the best phone','900','https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80',4);


COMMIT;