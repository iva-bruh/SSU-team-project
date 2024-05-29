import { ApiModule } from "../../../lib/api"

export async function load({params}){
  console.log(123);
  
  const animal = await ApiModule.getAnimalByID(params.cardId) 
  return{
    animal: animal[0]
  };
}

// export let load = async ({depends}) => {
//   depends('refresh');
//   const animals = await ApiModule.getAnimals()
//   return {
//     animals
//   };
// }

