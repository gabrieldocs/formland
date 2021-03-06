import React, {createContext, useEffect, useState} from "react";
import {getRandomQuote} from "./billboard.service";
import {PropsBillboardContext} from "./models/BillboardPropsType";

const DEFAULT_VALUE: PropsBillboardContext = {
    state: {
        id: "",
        title: "",
        caption: "",
        content: "",
    },
    setState: () => {},
    updateRandomQuote: () => {},
    saveFavoriteQuote: () => null,
    deleteFavoriteQuote: () => null,
}

export const BillboardContext = createContext<PropsBillboardContext>(DEFAULT_VALUE);

export const BillboardContextProvider: React.FC = ({ children })=> {
    const [state, setState] = useState(DEFAULT_VALUE.state);

    useEffect(()=>{
        const localFavorite = localStorage.getItem("@app:favorite:quote");
        if(localFavorite) {
            setState({
                id: JSON.parse(localFavorite)._id,
                title: JSON.parse(localFavorite).title,
                caption: JSON.parse(localFavorite).caption,
                content: JSON.parse(localFavorite).content,
            });
        } else {
            getRandomQuote()
                .then((response) => {
                    setState({
                        id: response._id,
                        title: response.author,
                        caption: response.authorSlug,
                        content: response.content,
                    });
                });
        }
    },[]);

    function updateRandomQuote(){
        getRandomQuote()
            .then((response)=>{
                setState({
                    id: response._id,
                    title: response.author,
                    caption: response.authorSlug,
                    content: response.content,
                });
            });
    }

    function saveFavoriteQuote(): void {
        const favorite = JSON.stringify(state);
        localStorage.setItem("@app:favorite:quote", favorite);
    }

    function deleteFavoriteQuote(): void {
        localStorage.removeItem("@app:favorite:quote");
    }

    return (
        <BillboardContext.Provider value={{
            state,
            setState,
            updateRandomQuote,
            saveFavoriteQuote,
            deleteFavoriteQuote,
        }}>
        {children}
    </BillboardContext.Provider>)
}