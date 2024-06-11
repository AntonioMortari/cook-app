import { IPreparation } from '@/@types/preparations';
import { supabase } from './supabase';


export const getById = async(id: string) => {
    const {data, error } = await supabase
        .from('preparations')
        .select()
        .eq('id', id)
        .returns<IPreparation>()

    return data;
        
}