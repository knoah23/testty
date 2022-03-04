import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewKk} pointerEvents={'auto'}>
        <Text style={[styles.Textim, { color: theme.colors.strong }]}>
          {'Settings'}
        </Text>
      </View>

      <View style={styles.Viewmt} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.ViewdC} pointerEvents={'auto'}>
            <View style={styles.Viewxk}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                style={[styles.Textti, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>

            <View style={styles.View_6Z}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DivideruP}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewHN} pointerEvents={'auto'}>
            <View style={styles.Viewvr}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                style={[styles.TextIR, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>

            <View style={styles.ViewqG}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerew}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewIE} pointerEvents={'auto'}>
            <View style={styles.View_8T}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
              />
              <Text
                style={[styles.TextGG, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>

            <View style={styles.ViewXB}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider_91}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewNp} pointerEvents={'auto'}>
            <View style={styles.ViewyS}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/questioncircle'}
              />
              <Text
                style={[styles.Text_4a, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>

            <View style={styles.ViewgF}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividervf}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewKm} pointerEvents={'auto'}>
            <View style={styles.ViewYT}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[styles.Text_7J, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.ViewOv}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerca}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.Viewpq} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.Viewtf} pointerEvents={'auto'}>
            <Text style={[styles.TextfH, { color: theme.colors.primary }]}>
              {'Sign Out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textim: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewKk: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textti: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewxk: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_6Z: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewdC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DivideruP: {
    height: 1,
  },
  TextIR: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewvr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewqG: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewHN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerew: {
    height: 1,
  },
  TextGG: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_8T: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewXB: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewIE: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Divider_91: {
    height: 1,
  },
  Text_4a: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewyS: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewgF: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewNp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividervf: {
    height: 1,
  },
  Text_7J: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewYT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewOv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewKm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerca: {
    height: 1,
  },
  Viewmt: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  TextfH: {
    textAlign: 'center',
  },
  Viewtf: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 54,
    justifyContent: 'center',
  },
  Viewpq: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(AppSettingsScreen);
