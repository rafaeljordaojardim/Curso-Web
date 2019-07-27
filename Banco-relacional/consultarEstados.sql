select * from estados

-- select sigla, nome as 'Nome do estado' from estados

select sigla, nome as 'Nome do estado' from estados
where regiao = 'Sul'

select nome, regiao, populacao from estados 
where populacao >= 10
order by populacao desc
