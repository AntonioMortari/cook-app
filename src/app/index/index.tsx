import { Text, View } from 'react-native';
import { styles } from './style'
import { Ingredient } from '@/src/components/Ingredient';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            <Ingredient name='Maçã' />
            <Ingredient name='Queijo' />
            <Ingredient name='Uva' />
        </View>
    );
}

export default App;