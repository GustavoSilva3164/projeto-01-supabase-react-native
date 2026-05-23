CREATE TABLE listadesejos (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
