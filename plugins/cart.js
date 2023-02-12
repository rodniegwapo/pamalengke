export default function ({ app, store }) {
  // const orderItems = app.$cookies.get('order_items') ? app.$cookies.get('order_items').map((el) => {
  //   return el.id
  // }) : null
  // const promoOrderItems = app.$cookies.get('promo_order_items') ? app.$cookies.get('promo_order_items').map((el) => {
  //   return el.id
  // }) : null
  // if (orderItems || promoOrderItems) {
  //   app.$axios.get('api/public/product-by-cookies', {
  //     params: {
  //       order_items: orderItems,
  //       promo_order_items: promoOrderItems,
  //       include: 'images'
  //     }
  //   })
  //     .then((res) => {
  //       if (res.data.product) {
  //         const product = res.data.product.data.map((el) => {
  //           const quantity = app.$cookies.get('order_items').find(el2 => el2.id === el.id)
  //           return {
  //             id: el.id,
  //             name: el.description,
  //             desc: el.description,
  //             discount: el.discount,
  //             total: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) * quantity.quantity : el.price * quantity.quantity,
  //             quantity: quantity ? quantity.quantity : 0,
  //             price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
  //             not_discouted_price: el.price,
  //             image_md: el.images.data.medium_image,
  //             image_sm: el.images.data.small_image,
  //             image_lg: el.images.data.large_image,
  //             stocks: el.stocks
  //           }
  //         })
  //         app.store.commit('cart/setNonPromos', product)
  //       }
  //       if (res.data.promo_product) {
  //         const promoProduct = res.data.promo_product.data.map((el) => {
  //           const quantity = app.$cookies.get('promo_order_items').find(el2 => el2.id === el.id)
  //           return {
  //             id: el.id,
  //             name: el.name,
  //             desc: el.description,
  //             discount: el.discount,
  //             total: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) * quantity.quantity : el.price * quantity.quantity,
  //             quantity: quantity ? quantity.quantity : 0,
  //             price: el.discount > 0 ? (el.price - (el.discount / 100) * el.price) : el.price,
  //             not_discouted_price: el.price,
  //             image_md: el.images.data.medium_image,
  //             image_sm: el.images.data.small_image,
  //             image_lg: el.images.data.large_image,
  //             stocks: el.stocks
  //           }
  //         })
  //         app.store.commit('cart/setPromos', promoProduct)
  //       }
  //     })
  // }
}
