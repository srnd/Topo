/**
 * Defines the colors used in a Topo theme.
 */
export interface IThemeColors {
    /** Primary accent color for the theme. (One of the primary changes by program.) */
    accent: string;

    /** Foreground color of body copy (but not all UI elements). This should generally be a shade of black. */
    foreground: string;

    /** Background color of the page. This should generally be white. */
    background: string;

    /** Color of disabled buttons, form element text, etc. */
    disabled: string;

    /** Color of borders on form elements, <hr>s, etc. */
    border: string;
    
    /** Color of text in a placeholder element. */
    placeholder: string;

    /** Opacity of shadows used on e.g. featured elements. */
    shadowOpacity: number;

    /**
     * Base radius of borders for buttons. (May need to be adjusted when a rounded element is nested close to the border
     * of another rounded element.)
     */
    borderRadius: number;
}

/**
 * Defines the fonts used in a Topo theme.
 */
export interface IThemeFonts {
    /** Font stack for headers. */
    headers: string[],

    /** Font stack for body copy (but not UI elements). */
    copy: string[],

    /** Font stack for UI elements. */
    ui: string[]
}

/**
 * Defines a Topo theme.
 */
export interface ITheme {
    /**
     * Calculates the size to use according to modular scale rules.
     *  
     * @param step - The size requested, where 0 is standard body copy size.
     */
    scale(step: number): string;

    /** The site logo. TODO */
    logo: string;

    /** The fonts used in this theme. */
    fonts: IThemeFonts;

    /** The colors used in this theme. */
    colors: IThemeColors;
}