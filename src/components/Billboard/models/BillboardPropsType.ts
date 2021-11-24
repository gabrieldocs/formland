import React from "react";

export type billboardType = {
    id: string|number|null;
    title: string|null;
    caption: string|null;
    content: string|null;
};

export type PropsBillboardContext = {
    state: billboardType;
    setState: React.Dispatch<React.SetStateAction<billboardType>>;
    updateRandomQuote: () => void;
    saveFavoriteQuote: () => void;
    deleteFavoriteQuote: () => void;
};