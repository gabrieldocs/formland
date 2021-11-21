import React, { memo } from "react";
import BillboardView from "./Billboard.view";
import {BillboardContextProvider} from "./billboard.context";

function Billboard(): React.ReactElement {
    return (
        <BillboardContextProvider>
            <BillboardView />
        </BillboardContextProvider>
    );
}

export default memo(Billboard)