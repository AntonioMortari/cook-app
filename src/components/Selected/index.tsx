import { Text, View } from 'react-native';
import Animated, {SlideInDown, BounceOutDown} from 'react-native-reanimated';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/theme';

interface ISelectedProps{
    selectedQuantity: number;
}

const Selected = ({selectedQuantity}: ISelectedProps) => {
    return(
        <Animated.View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>{selectedQuantity} ingrediente{selectedQuantity > 1 ? 's': ''} selecionados</Text>
                <MaterialIcons name="close" size={24} color={theme.colors.gray_400} />
            </View>
        </Animated.View>
    );
}

export { Selected };