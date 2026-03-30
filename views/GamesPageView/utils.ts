export const generateRoomId = async () => {
  return crypto.randomUUID();
}