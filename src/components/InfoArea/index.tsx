import { Container, MonthArea, ResumeArea, MonthArrow, MonthTitle } from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth , onMonthChange, income, expense}: Props) => {
    const handlePreviousMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={handlePreviousMonth}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title='Receita' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem 
                    title='Balanço' 
                    value={income - expense} 
                    color={(income-expense) < 0 ? 'red' : 'green'}
                />
            </ResumeArea>
        </Container>
    );
}