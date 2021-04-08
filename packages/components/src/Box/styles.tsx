import styled from 'styled-components';
import { compose, space, color, typography, layout, flexbox, position, background } from 'styled-system';

import { BoxProps } from './types';

export const StyledBox = styled.div<BoxProps>(compose(space, color, typography, layout, flexbox, position, background));
