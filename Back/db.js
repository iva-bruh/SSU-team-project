import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'hvdom86',
})

await client.connect()

export async function createAnimal({image, type, name, sex, age, breed, story, about}){
    return await client.query(`
    INSERT INTO  animals (image, type, name, sex, age, breed, story, about)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [image, type, name, sex, age, breed, story, about])
}

export async function changeAnimal({id, image, type, name, sex, age, breed, story, about}){
    return await client.query(`
    UPDATE animals
    SET (image=$2, type=$3, name=$4, sex=$5, age=$6, breed=$7, story=$8, about=$9)
    WHERE id = $1
    RETURNING *
    `, [id, image, type, name, sex, age, breed, story, about]
)
}


export async function getAllAnimals(){
    return await client.query(`
    SELECT * FROM animals
    `,)
}

export async function deleteAnimal(id){
    return await client.query(`
    DELETE FROM animals
    WHERE id = $1
    `, [id])
}

export async function getAllAnimalById(id){
    return await client.query(`
    SELECT * FROM animals
    WHERE id = $1
    `, [id])
}