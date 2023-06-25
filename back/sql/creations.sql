DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_sup TEXT NOT NULL,
    contact_sup TEXT NOT NULL,
    desc_sup TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_prod TEXT NOT NULL UNIQUE,
    desc_prod TEXT NOT NULL,
    quant_prod INTEGER DEFAULT 0,
    supplier_id UUID REFERENCES suppliers(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date_trans DATE DEFAULT CURRENT_DATE,
    tipo_trans VARCHAR(10) NOT NULL,
    product_id UUID REFERENCES products(id),
    quant_trans INTEGER NOT NULL
);
