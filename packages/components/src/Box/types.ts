import { Ref } from 'react';
import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';

export interface BaseBoxProps extends
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BackgroundProps,
  BaseComponentProps,
  ClickableProps {
  color?: string;
}

export interface BoxProps extends BaseBoxProps {
  ref?: Ref<any>;
}
