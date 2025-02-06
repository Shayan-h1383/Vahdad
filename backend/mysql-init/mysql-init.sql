-- Ensure user exists
CREATE USER IF NOT EXISTS 'ali'@'%' IDENTIFIED BY 'sodagar';

-- Grant all necessary permissions
GRANT ALL PRIVILEGES ON *.* TO 'ali'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
