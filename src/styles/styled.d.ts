import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary100: string;
      secondary100: string;
      gray100: string;
      gray0: string;
    };
  }
}
