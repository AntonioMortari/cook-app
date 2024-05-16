import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
import { Ingredient } from '@/components/Ingredient';
import { useState } from 'react';
import { Selected } from '@/components/Selected';


interface IIngredient {
    id: number;
    name: string;
    selected: boolean;
    image: string
}

const ingredients: IIngredient[] = [
    { id: 1, name: 'Macã', selected: false, image: 'apple.png' },
    { id: 2, name: 'Banana', selected: false, image: 'banana.png' },
    { id: 3, name: 'Bacon', selected: false, image: 'bacon.png' },
    { id: 4, name: 'Kiwi', selected: false, image: 'kiwi.png' },
];

const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    const handleToggleSelected = (value: string) => {
        if (selectedIngredients.includes(value)) {
            setSelectedIngredients((state) => state.filter(ingredient => ingredient !== value));
        } else {
            setSelectedIngredients((state) => [...state, value]);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            <ScrollView
                contentContainerStyle={styles.containerIngredients}
            >
                <View style={styles.containerIngredients}>
                    {/* {Array.from({ length: 100 }).map((item, index) => {
                        return (
                            <Ingredient key={index} name='Macã' />
                        )
                    })} */}

                    {ingredients.map((ingredient, index) => {
                        return (
                            <Ingredient
                                onPress={() => handleToggleSelected(index.toString())}
                                key={index}
                                name={ingredient.name}
                                selected={selectedIngredients.includes(index.toString()) ? true : false}
                            />
                        )
                    })}

                </View>
            </ScrollView>

            {selectedIngredients.length > 0 && (
                <Selected selectedQuantity={selectedIngredients.length} />
            )}
        </View>
    );
}

export default App;