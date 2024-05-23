import { ApiModule } from "../../lib/api"

export let load = async ({depends}) => {
  depends('refresh');
  const animals = await ApiModule.getAnimals()
  return {
    animals
  }
}