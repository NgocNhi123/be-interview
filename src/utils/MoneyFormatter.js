export const VNDFormatter = () => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
