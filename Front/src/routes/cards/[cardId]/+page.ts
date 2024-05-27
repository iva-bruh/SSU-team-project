import { ApiModule } from "../../../lib/api"

// export async function load({params}){
//   const animals = await ApiModule.getAnimalByID(params.cardId) 
//   return{
//     animals
//   };
// }

export let load = async ({depends}) => {
  depends('refresh');
  const animals = await ApiModule.getAnimals()
  return {
    animals
  };
}

