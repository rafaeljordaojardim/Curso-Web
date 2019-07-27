INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 123131231),
    ('Vale',7182338713),
    ('Cielo', 318237282)
select * from empresas
    ALTER TABLE empresas MODIFY cnpj VARCHAR(14)
DELETE FROM empresas WHERE id = 6


desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)