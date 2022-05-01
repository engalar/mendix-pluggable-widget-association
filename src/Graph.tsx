import { createElement, useMemo } from "react";
import { GraphContainerProps } from "../typings/GraphProps";
import { ValueStatus } from "mendix";

export default function (props: GraphContainerProps) {
    const value = useMemo(() => {
        if (props.optionsSource && props.optionsSource.status === ValueStatus.Available) {
            return props.optionsSource.items!.map(obj => props.displayValue?.get(obj).value!);
        }
    }, [props.optionsSource]);

    console.log(props.reference.value);

    return (
        <div>
            your value is {value}
        </div>
    );
}
