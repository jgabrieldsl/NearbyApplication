import { Stack } from 'expo-router';
import { colors } from '@/styles/theme';

// Fonts
import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik";

import { Loading } from '@/components/loading'

export default function Layout() {
    const [fontsLoaded] = useFonts ({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    // Se as fontes ainda não foram carregadas, retorna nada
    if (!fontsLoaded) {
        return <Loading/>;
    }

    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] }
    }}/>
}