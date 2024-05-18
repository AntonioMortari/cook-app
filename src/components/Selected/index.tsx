import { Text, View } from 'react-native';
import Animated, { SlideInDown, BounceOutDown } from 'react-native-reanimated';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/theme';
import { Button } from '../Button';
import { router } from 'expo-router';

interface ISelectedProps {
    selectedIngredients: string[];
    setSelectedIngredients: (selectedIngredients: string[]) => void;
}

const Selected = ({ selectedIngredients, setSelectedIngredients }: ISelectedProps) => {
    return (
        <Animated.View
            style={styles.container}
            entering={SlideInDown}
            exiting={BounceOutDown}
        >
            <View style={styles.header}>
                <Text style={styles.textHeader}>{selectedIngredients.length} ingrediente{selectedIngredients.length > 1 ? 's' : ''} selecionados</Text>
                <MaterialIcons onPress={() => setSelectedIngredients([])} name="close" size={24} color={theme.colors.gray_400} />
            </View>

            <Button title='Encontrar' onPress={() => router.navigate({
                pathname: 'recipes',
                params: { selectedIngredients }
            })} />
        </Animated.View>
    );
}

export { Selected };