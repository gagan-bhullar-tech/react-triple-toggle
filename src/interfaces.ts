export interface TripleToggleProps {
    id?: string;
    left: {
        label: string;
        value: string;
    };
    center: {
        label: string;
        value: string;
    };
    right: {
        label: string;
        value: string;
    };
    onChange: (value: string) => void;
}