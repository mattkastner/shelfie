SELECT *
FROM product
WHERE name LIKE '%'||($1)||'%';