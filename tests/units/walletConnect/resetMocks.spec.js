import { ethers } from 'ethers'
import { mock, resetMocks, confirm, anything } from 'src'
import { supported } from "src/blockchains"

describe('mock transactions', ()=> {

  supported.forEach((blockchain)=>{

    describe(blockchain, ()=> {

      class WalletConnectStub {}
      
      beforeEach(resetMocks)

      it('initializes connector class instance', async ()=> {
        mock({ blockchain, connector: WalletConnectStub, wallet: 'walletconnect' })
        expect(WalletConnectStub.instance).toBeDefined()
      })

      it('resets initialized connect class instance between tests', async ()=> {
        expect(WalletConnectStub.instance).not.toBeDefined()
      })
    })
  })
})
