import { ScrollView, Text, View } from 'react-native';
import { styles } from './style'
import { Ingredient } from '@/components/Ingredient';

const App = () => {
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
                    {Array.from({ length: 100 }).map((item, index) => {
                        return (
                            <Ingredient key={index} name='Macã' />
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );
}

export default App;