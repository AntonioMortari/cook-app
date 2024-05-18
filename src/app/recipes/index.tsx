import { router, useLocalSearchParams } from 'expo-router';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@/theme';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { Ingredient } from '@/components/Ingredient';


const Recipes = () => {
    const { selectedIngredients } = useLocalSearchParams();
    const [ingredients, setIngredients] = useState<IngredientsResponse[]>([]);

    useEffect(() => {
        const getIngredients = async () => {
            const data = await services.ingredients.getAll();

            setIngredients(data);
        };

        getIngredients();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Pressable onPress={() => router.back()}>
                    <AntDesign name='arrowleft' size={35} color={theme.colors.black} />
                </Pressable>

                <Text style={styles.title}>Ingredientes</Text>

                <ScrollView
                    contentContainerStyle={styles.containerSelectedIngredients}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {ingredients.map((ingredient, index) => {
                        if (selectedIngredients.includes(ingredient.name)) {
                            return (
                                <Ingredient
                                    key={index}
                                    name={ingredient.name}
                                    image={`${services.storage.imagePath}${ingredient.image}`}
                                />
                            )
                        }
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default Recipes;