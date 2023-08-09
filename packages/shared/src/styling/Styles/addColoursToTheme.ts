import { ColoursType, ThemeType } from './ThemeType';

export function addColoursToTheme(theme: ThemeType): ThemeType {
  return {
    ...theme,
    colours: Object.entries(theme.colours).reduce((prevColours, [colourKey, currentColour]) => ({
      ...prevColours,
      [colourKey]: {
        1: currentColour[1],
        2: currentColour[2] ?? currentColour[1],
        3: currentColour[3] ?? currentColour[1],
        4: currentColour[4] ?? currentColour[1],
        5: currentColour[5] ?? currentColour[1],
        6: currentColour[6] ?? currentColour[1],
        7: currentColour[7] ?? currentColour[1],
        8: currentColour[8] ?? currentColour[1],
        9: currentColour[9] ?? currentColour[1],
        10: currentColour[10] ?? currentColour[1],
        11: currentColour[11] ?? currentColour[1],
      },
    }), {} as ColoursType),
  };
}
