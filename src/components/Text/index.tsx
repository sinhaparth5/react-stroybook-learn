import {ComponentProps, forwardRef} from "react";
import {cva, VariantProps} from "class-variance-authority";

const textStyles = cva("w-full", {
    variants: {
        emphasis: {
            low: "text-gray-600 font-light",
        },
        size: {
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
        },
        weight: {
            thin: "font-thin",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            black: "font-black",
        },
        align: {
            left: "left-align",
            center: "center-align",
            right: "right-align",
        },
        italic: {
            true: "italic",
        },
        underline: {
            true: "underline underline-offset-2",
        },
    },
    defaultVariants: {
        size: "base",
        align: "left",
    }
})

type TextProps = ComponentProps<"span"> & VariantProps<typeof textStyles>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ ...props }, ref) => {
    return <span ref={ref} {...props } />
});