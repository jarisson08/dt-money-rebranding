import {ThemeProvider} from 'styled-components'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from "./contexts/TransactionsContext"
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'



export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
       <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}


