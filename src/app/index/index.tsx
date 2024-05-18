import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
import { Ingredient } from '@/components/Ingredient';
import { useEffect, useState } from 'react';
import { Selected } from '@/components/Selected';
import { supabase } from '@/services/supabase';
import { services } from '@/services';
import { Loading } from '@/components/Loading';


const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<IngredientsResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleToggleSelected = (value: string) => {
        if (selectedIngredients.includes(value)) {
            return setSelectedIngredients((state) => state.filter(ingredient => ingredient !== value));
        } else {
            setSelectedIngredients((state) => [...state, value]);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        const getIngredients = async () => {
            const data = await services.ingredients.getAll();

            setIngredients(data);
            setIsLoading(false);
        };

        getIngredients();
    },[]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            {isLoading ? (
                <Loading />
            ) : (
                <ScrollView
                    contentContainerStyle={styles.containerIngredients}
                >
                    <View style={styles.containerIngredients}>

                        {ingredients.map((ingredient, index) => {
                            return (
                                <Ingredient
                                    onPress={() => handleToggleSelected(ingredient.name)}
                                    key={index}
                                    name={ingredient.name}
                                    image={`${services.storage.imagePath}${ingredient.image}`}
                                    selected={selectedIngredients.includes(ingredient.name) ? true : false}
                                />
                            )
                        })}

                    </View>
                </ScrollView>
            )}

            {selectedIngredients.length > 0 && (
                <Selected
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                />
            )}
        </View>
    );
}

export default App;