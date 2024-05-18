import { supabase } from './supabase';


export const getAll = async () => {
    const { data } = await supabase
        .from('ingredients')
        .select()
        .order('name')
        .returns<IngredientsResponse[]>();

    return data || [];
}