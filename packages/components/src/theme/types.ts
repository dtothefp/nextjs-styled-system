import theme from '.';

export type Theme = typeof theme;

// type Colors = {
// text: string;
// background: string;
// primary: string;
// secondary: string;
// muted: string;
// gray: string;
// highlight: string;
// }

// type Elevations = {
// none: string;
// low: string;
// medium: string;
// high: string;
// }

// type Fonts = {
// body: string;
// heading: string;
// monospace: string;
// }

// type FontSizes = number[];

// type FontWeights = {
// body: number;
// heading: number;
// bold: number;
// }

// type LineHeights = {
// body: number;
// heading: number;
// }

// type Space = number[];

// sizes: {
// avatar: 48,
// },
// radii: {
// default: 4,
// circle: 99999,
// },
// shadows: {
// card: '0 0 4px rgba(0, 0, 0, .125)',
// },
// text: {
// heading: {
// fontFamily: 'heading',
// lineHeight: 'heading',
// fontWeight: 'heading',
// },
// display: {
// fontFamily: 'heading',
// fontWeight: 'heading',
// lineHeight: 'heading',
// fontSize: [ 5, 6, 7 ],
// },
// caps: {
// textTransform: 'uppercase',
// letterSpacing: '0.1em',
// },
// },
// variants: {
// avatar: {
// width: 'avatar',
// height: 'avatar',
// borderRadius: 'circle',
// },
// card: {
// p: 2,
// bg: 'background',
// boxShadow: 'card',
// },
// link: {
// color: 'primary',
// },
// nav: {
// fontSize: 1,
// fontWeight: 'bold',
// display: 'inline-block',
// p: 2,
// color: 'inherit',
// textDecoration: 'none',
// ':hover,:focus,.active': {
// color: 'primary',
// }
// },
// },
// buttons: {
// primary: {
// fontSize: 2,
// fontWeight: 'bold',
// color: 'background',
// bg: 'primary',
// borderRadius: 'default',
// },
// outline: {
// variant: 'buttons.primary',
// color: 'primary',
// bg: 'transparent',
// boxShadow: 'inset 0 0 2px',
// },
// secondary: {
// variant: 'buttons.primary',
// color: 'background',
// bg: 'secondary',
// },
// },
// styles: {
// root: {
// fontFamily: 'body',
// fontWeight: 'body',
// lineHeight: 'body',
// },
// },

// export interface Theme {
// classPrefix: string;
// space: ThemeSpace;
// elevations: ThemeElevations;
// gridWidth: number;
// gridGutter: number;
// gridColumns: number;
// radii: ThemeRadii;
// radius: number;
// stroke: ThemeStroke;
// colors: NewThemeColors | ThemeColors;
// breakpoints: ThemeBreakpoints;
// typography: ThemeTypography | NewThemeTypography;
// component: {
// Alert: AlertTokens;
// Badge: BadgeTokens;
// Button: ButtonTokens;
// Card: CardTokens;
// Divider: DividerTokens;
// InlineAlert: InlineAlertTokens;
// Input: InputTokens;
// Label: LabelTokens;
// Link: LinkTokens;
// MediaItem: MediaItemTokens;
// Tag: TagTokens;
// Toast: ToastTokens;
// CheckboxContainer: CheckboxContainerTokens;
// CheckIcon: CheckIconTokens;
// Checkbox: CheckboxTokens;
// Radio: RadioTokens;
// Overlay: OverlayTokens;
// CheckboxLabel: CheckboxLabelTokens;
// TypePairing: TypePairingTokens;
// };
// }
