// export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
//   style: 'currency',
//   currency: 'BRL'
// })

type PropsFormattedPrice = {
  code?: string;
  number: number;
};

export function formattedPrice({ code = "BRL", number }: PropsFormattedPrice) {
  const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: code,
  });

  return formatPrice(number);
}
