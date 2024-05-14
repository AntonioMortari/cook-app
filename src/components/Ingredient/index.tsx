import { Image, Pressable, PressableProps, Text } from 'react-native';
import { styles } from './style';

interface IIngredientProps {
    name: string;
    image: string;
    selected?: boolean;
}

const Ingredient = ({ name, image, selected = false, ...rest }: IIngredientProps & PressableProps) => {
    return (
        <Pressable style={[styles.container, selected && styles.containerSelected]}
            {...rest}
        >
            <Image source={require('@/assets/apple.png')} height={16} width={16} />
            <Text>{name}</Text>
        </Pressable>
    );
}

export { Ingredient };