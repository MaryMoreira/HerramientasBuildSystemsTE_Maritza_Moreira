
// atiende a la peticion de login
export const aSendLogin = (user, pass) => ({
    type: "SendLogin",
    user,
    pass
});

// enviar un logout
export const aSendLogout = () => ({
    type: "SendLogout"
});


// muestra la compra
export const aShowPurcharse = (item) => ({
    type: "ShowPurcharse",
});

// muestra la compra
export const aShowMainPage = (item) => ({
    type: "ShowMainPage",
});

// utiliza el filtro de los items
export const aFilterItems = (filter) => ({
    type: "FilterItems",
    filter
});

// añadir un item al carrito de compras
export const aAddItem = (item) => ({
    type: "AddItem",
    item
});

// remover un item al carrito de compra
export const aRemoveItem = (item) => ({
    type: "RemoveItem",
    item
});

// muestra el detalle del item
export const aShowItem = (item) => ({
    type: "ShowItem",
    item
});