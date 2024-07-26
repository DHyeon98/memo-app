import ThemeText from '@/components/common/theme-text/theme-text';
import { conversionTime } from '@/utils/conversionTime';
import { RouteProp, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';

type RouteParams = {
  params: {
    id: string;
  };
};

interface DetailsDateType {
  detailsId: string;
}

export default function DetailsDate({ detailsId }: DetailsDateType) {
  return (
    <DateTextContainer>
      <ThemeText fontFamily="Pretendard-Bold">{conversionTime(detailsId)}</ThemeText>
    </DateTextContainer>
  );
}
const DateTextContainer = styled.View`
  margin-bottom: 10px;
`;
