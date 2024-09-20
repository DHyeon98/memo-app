import ThemeText from '@/components/common/theme-text/theme-text';
import { conversionTime } from '@/utils/conversion-time';
import styled from 'styled-components/native';

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
