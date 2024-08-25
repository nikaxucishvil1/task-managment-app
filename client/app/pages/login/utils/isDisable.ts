export const isDisable = (isSubmitting: boolean, touched: any, errors: any) => {
  if (isSubmitting) return true;
  if (touched.email && errors.email) return true;
  if (touched.password && errors.password) return true;
  if (isSubmitting) return true;
  return false;
};
