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
insert into products (name,description,price,image,category_id) values ('Iphone','iphone is the best phone','1000','https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNy7KHhM_hAhUJ5oMKHXKlC_kQjRx6BAgBEAU&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-11-pro&psig=AOvVaw2X_X_X_X_X_X_X_X&ust=1589788982799086',1),
 ('Samsung','Samsung is the best phone','1000','https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNy7KHhM_hAhUJ5oMKHXKlC_kQjRx6BAgBEAU&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-11-pro&psig=AOvVaw2X_X_X_X_X_X_X_X&ust=1589788982799086',2), 
 ('Nokia','Nokia is the best phone','1000','https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNy7KHhM_hAhUJ5oMKHXKlC_kQjRx6BAgBEAU&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-11-pro&psig=AOvVaw2X_X_X_X_X_X_X_X&ust=1589788982799086',3), 
 ('Sony','Sony is the best phone','1000','https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNy7KHhM_hAhUJ5oMKHXKlC_kQjRx6BAgBEAU&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-11-pro&psig=AOvVaw2X_X_X_X_X_X_X_X&ust=1589788982799086',4);


COMMIT;