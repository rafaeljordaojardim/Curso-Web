select * from cidades;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES  
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Rafael Jardim', null)

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES  
    ('Zenaldo Coutinho', null);
select * from prefeitos
-- nao pode ter mais de um associado