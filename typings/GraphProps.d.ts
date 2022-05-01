/**
 * This file was generated from Graph.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ModifiableValue } from "mendix";

export interface GraphContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    reference: ModifiableValue<ObjectItem>;
    optionsSource?: ListValue;
    displayValue?: ListAttributeValue<string>;
}

export interface GraphPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    reference: string;
    optionsSource: {} | { type: string } | null;
    displayValue: string;
}
