import { TouchableOpacity,
    TouchableOpacityProps,
    Text,
    TextProps,
    ActivityIndicator
} from "react-native";

import { styles } from "./styles"
import { colors } from "@/styles/theme";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({children, style, isLoading = false, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity
            style={ styles.container }
            activeOpacity={ 0.7 }
            disabled={ isLoading }
            {...rest}
        > 
            {isLoading ? (
                <ActivityIndicator  size="small" color={ colors.gray[100] }/>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}

function Title({children}: TextProps) {
    return (
        <Text style={ styles.title }> { children } </Text>
    );
}

Button.Title = Title

export { Button }