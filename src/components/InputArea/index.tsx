import { Container } from './styles';
import { Item } from '../../types';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2024, 9, 12),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        };
        onAdd(newItem);
    }

    return (
        <Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </Container>
    );
}