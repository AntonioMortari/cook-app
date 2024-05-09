import { Image, Pressable, Text } from 'react-native';
import { styles } from './style';
import macaImage from '@/assets/apple.png'

interface IIngredientsProps {
    name: string;
}

const Ingredient = ({ name }: IIngredientsProps) => {
    return (
        <Pressable style={styles.container}>
            <Image source={macaImage} />
            <Text>{name}</Text>
        </Pressable>
    );
}

export { Ingredient };