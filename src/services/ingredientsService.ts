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

export const findByIds = async(ids: string[]) => {
    const { data} = await supabase
        .from('ingredients')
        .select()
        .in('id', ids)
        .order('name')
        .returns<IIngredient[]>()

        return data
}