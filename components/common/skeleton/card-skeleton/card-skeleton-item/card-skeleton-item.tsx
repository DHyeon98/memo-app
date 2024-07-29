import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useContext } from 'react';
import styled from 'styled-components/native';
import SkeletonItem from '../../skeleton-Item';
import { StyleSheet, View } from 'react-native';

export default function CardSkeletonItem() {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(themeType(theme));

  return (
    <View style={styles.container}>
      <View style={styles.skeletonBox}>
        <View style={[styles.skeletonItemContainer, { width: '50%' }]}>
          <SkeletonItem />
        </View>
        <View style={[styles.skeletonItemContainer, { width: '20%' }]}>
          <SkeletonItem />
        </View>
      </View>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      gap: 10,
    },
    skeletonBox: {
      padding: 10,
      backgroundColor: theme.cardBg,
      gap: 5,
    },
    skeletonItemContainer: {
      height: 20,
    },
  });
