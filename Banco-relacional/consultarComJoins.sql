select * from prefeitos;
select * from cidades;
select * from cidades c inner join prefeitos p on
            c.id = p.cidade_id;

-- vai aparecer as cidades que nao tem prefeitos
select * from cidades c 
    left join 
    prefeitos p 
on c.id = p.cidade_id;

-- vai aparecer os prefeitos que não tem cidade
select * from cidades c right join prefeitos p on c.id = p.cidade_id

-- full join
select * from cidades c 
    left join 
    prefeitos p 
on c.id = p.cidade_id
UNION
select * from cidades c right join prefeitos p on c.id = p.cidade_id




