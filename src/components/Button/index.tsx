import { Text, TouchableOpacity } from 'react-native';


interface IButtonProps {
    label: string;
}

const Button = ({ label }: IButtonProps) => {
    return (
        <>
            <TouchableOpacity>
                <Text>{label}</Text>
            </TouchableOpacity>
        </>
    );
}

export { Button };