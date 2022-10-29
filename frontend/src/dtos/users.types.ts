export type UserDTO = {
  username?: string;
  email?: string | null;
  crc?: string | null;
  name?: string | null;
  whatsapp?: string | null;
  cnpj?: string | null;
  corporate_name?: string | null;
  type?: string;
  created_at?: string;
  updated_at?: string | null;
  isAccept: boolean;
};
