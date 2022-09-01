import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionsModal } from "../NewTransactionsModal";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from "../../assets/Logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

      <NewTransactionsModal/>
      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}