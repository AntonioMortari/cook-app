import { IIngredient } from '@/@types/ingredients';
import { supabase } from './supabase';


export const getAll = async () => {
    const { data } = await supabase
        .from('ingredients')
        .select()
        .order('name')
        .returns<IIngredient[]>();

    return data || [];
}