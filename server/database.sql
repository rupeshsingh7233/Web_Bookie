CREATE DATABASE jwttoken;

-- set extention
CREATE TABLE
    users (
        user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
        user_name VARCHAR(225) NOT NULL,
        user_email VARCHAR(225) NOT NULL,
        user_password VARCHAR(225) NOT NULL
    );

--- insert fake users
INSERT INTO
    users (user_name, user_email, user_password)
VALUES
    ('Hancy', 'hancy@gamil.com', 'rtyuifghj');