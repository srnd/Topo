import React from 'react'
import { ITheme } from './ITheme'
import CodeDayTheme from './CodeDay'
import CodeLabsTheme from './CodeLabs'
import CSFairTheme from './CSFair'
import SRNDTheme from './SRND'
import PropTypes from 'prop-types';

const ThemeContext = React.createContext<ITheme>(new SRNDTheme);


interface IProps {
    theme: string;
}

/**
 * Outer theme wrapper; provides theme context to all inner components. Available themes are defined in the src/themes
 * folder of Topo, and include: srnd, codeday, codelabs, csfair.
 */
export class Theme extends React.Component<IProps> {
    static propTypes = {
        theme: PropTypes.string
    }

    render() {
        return <ThemeContext.Provider value={this.getTheme(this.props.theme)}>
            {this.props.children}
        </ThemeContext.Provider>
    }

    /**
     * Gets the theme class (implementing IProps) by theme name string.
     * 
     * @param themeName - Name of the theme to use. Not case sensitive. One of: codeday, codelabs, csfair, srnd.
     */
    getTheme(themeName: string): ITheme {
        const themes: { [themeName: string]: ITheme } = {
            "codeday": new CodeDayTheme,
            "codelabs": new CodeLabsTheme,
            "csfair": new CSFairTheme,
            "srnd": new SRNDTheme,
        }
        
        if (!(themeName.toLowerCase() in themes))
            throw new RangeError(`Theme name ${themeName} could not be loaded: not found.`);

        return themes[themeName.toLowerCase()];
    }
}
export const withTheme = (Component) => (props) => <ThemeContext.Consumer>{ theme => <Component theme={theme} {...props} /> }</ThemeContext.Consumer>