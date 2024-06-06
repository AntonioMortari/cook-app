import { IRecipes } from '@/@types/recipes';
import { supabase } from './supabase';

export const getRecipesByIngredients = async (ids: string[]) => {
    const { data, error } = await supabase
        .rpc('recipes_by_ingredients', { ids })
        .returns<IRecipes[]>()


    if (error) {
        console.log(error);
    }

    return data;
};