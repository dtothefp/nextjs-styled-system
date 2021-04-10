import { ReactNode } from 'react';
import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BackgroundProps,
  BordersProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BordersProps,
    BackgroundProps {
  color?: string;
  // TODO: determine how to properly type `ref`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  as?: string;
  __css?: Record<string, string | number | Record<string, string | number>>;
  variant?: string;
  children?: ReactNode | ReactNode[];
}
