export const removeDashesFromPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/-/g, "");
};
