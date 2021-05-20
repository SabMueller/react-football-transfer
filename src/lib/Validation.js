const validateName = (name) => name.length >= 2;
const validateEmail = (email) =>
  email.includes('@') && (email.endsWith('.com') || email.endsWith('.de')); //regular Expressions
const validatePrice = (price, free_transfer) =>
  (parseFloat(price) >= 1 && !free_transfer) || free_transfer;
//const außerhalb, damit später testing möglich ist, könnten aber auch im function body leben
// export const validateName dann um const zu exportieren

export default function validatePlayer(player) {
  return (
    validateName(player.name) &&
    validateEmail(player.email) &&
    validatePrice(player.price, player.free_transfer)
  );
}
