import { CustomButton } from './styles';

type ButtonProps = {
    title: string;
    onClick: () => void;
}

export default function Button ({ title, onClick }: ButtonProps) {
    return (
        <CustomButton onClick={onClick}>
            {title}
        </CustomButton>
    )
}

