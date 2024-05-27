import axios from "axios"; 

const baseURL = 'http://localhost:3000'

interface ItemAnimal{
    id?: number,
    image: string,
    type?: string,
    name: string,
    sex?: string,
    age?: string,
    breed?: string,
    story?: string,
    about?: string
}

async function getAnimals(): Promise<Array<ItemAnimal>>{
    const res = await axios.get(`${baseURL}/animals`)
    return res.data;
}

async function createAnimal(dto: ItemAnimal){
    return await axios.post(`${baseURL}/animals`, dto)
}

async function deleteAnimal(id: number){
    return await axios.delete(`${baseURL}/animals/${id}`)
}

async function getAnimalByID(id: number): Promise<Array<ItemAnimal>>{
    const res = await axios.get(`${baseURL}/animals/${id}`)
    return res.data
}

    

export const ApiModule = {
    getAnimals,
    createAnimal,
    deleteAnimal,
    getAnimalByID
}