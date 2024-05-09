import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: theme.colors.gray_200,
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6
    }
});

export { styles };