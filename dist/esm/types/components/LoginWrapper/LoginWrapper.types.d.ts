import { ReactNode } from "react";
import { ApplicationLogoProps } from "../ApplicationLogo/ApplicationLogo.types";
export interface LoginWrapperProps {
    darkMode: boolean;
    logoProps: ApplicationLogoProps;
    form: ReactNode;
    formFooter?: ReactNode;
    promoHeader?: ReactNode;
    promoInfo?: ReactNode;
    backgroundAnimation?: boolean;
}
