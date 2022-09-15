import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from 'react-icons';

export const StatisticItem = props => {
  const { title, total, icon } = props;
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: 30 }}>{icon}</IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
