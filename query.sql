SELECT CONCAT(p.first_name, ' ', p.last_name) AS name, 
GROUP_CONCAT(ph.number ORDER BY ph.id SEPARATOR ',') AS numbers
FROM people p
LEFT JOIN phones ph ON p.id = ph.user_id
GROUP BY p.id
ORDER BY p.last_name, p.first_name;