import { IRecipes } from '@/@types/recipes';
import { services } from '@/services';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';


const DetailsRecipe = () => {
    const {recipeId} = useLocalSearchParams<{recipeId: string}>();
    const [recipeData, setRecipeData] = useState<IRecipes>();

    useEffect(() => {
        
        const getPreparation = async() => {
            const result = await services.preparations.getById(recipeId);

            console.log(result);
        }

        getPreparation();

    }, []);

    return(
        <>
            <View>

            </View>
        </>
    )
}

export default DetailsRecipe;