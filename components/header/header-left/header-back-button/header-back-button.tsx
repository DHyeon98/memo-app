import Arrow from "@/components/svg/arrow";
import { themeType } from "@/constants/theme";
import { ThemePropType } from "@/contexts/themProvider";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function HeaderBackButton({theme}: ThemePropType) {
    const expoRouter = useRouter();
    const handleBack = () => {
        expoRouter.back()
    }
    return(
        <Pressable onPress={handleBack}>
            <Arrow width={26} height={26} fill={themeType(theme)} />
        </Pressable>
    )
}

