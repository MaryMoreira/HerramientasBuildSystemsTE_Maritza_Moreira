
import * as ACTION from './const';

// atiende a la peticion de login
export const aSendLogin = (user, pass) => ({
    type: ACTION.SEND_LOGIN,
    user,
    pass
});

// enviar un logout
export const aSendLogout = () => ({
    type: ACTION.SEND_LOGOUT
});


// muestra la compra
export const aShowPurchase = (item) => ({
    type: ACTION.SHOW_PURCHASE,
});

// muestra la compra
export const aShowHome = (clean) => ({
    type: ACTION.SHOW_HOME,
    clean
});

export const aPurchase = () => ({
    type: ACTION.PURCHASE,
});

// muestra el detalle del item
export const aShowItem = (item) => ({
    type: ACTION.SHOW_ITEM,
    item
});

// utiliza el filtro de los items
export const aFilterItems = (filter) => ({
    type: ACTION.FILTER_ITEMS,
    filter
});

// Añade una cantidad al item
export const aChangeQuantityItem = (item, amount) => ({
    type: ACTION.CHANGE_QUANTITY_ITEM,
    item,
    amount
});


// añadir un item al carrito de compras
export const aAddPurchaseItem = (item) => ({
    type: ACTION.ADD_PURCHASE_ITEM,
    item
});

// remover un item al carrito de compra
export const aRemovePurchaseItem = (item) => ({
    type: ACTION.REMOVE_PURCHASE_ITEM,
    item
});
