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

export async function changeAnimal({image, type, name, sex, age, breed, story, about}){
    return await client.query(`
    UPDATE animals
    SET (image=$1, type=$2, name=$3, sex=$4, age=$5, breed=$6, story=$7, about=$8)
    RETURNING *
    `, [image, type, name, sex, age, breed, story, about]
    `WHERE id = $1
    `, [id])
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