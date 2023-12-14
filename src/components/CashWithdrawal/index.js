import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrement = () => {
    this.setState(prevState => ({amount: prevState.amount - 20}))
  }

  render() {
    const {amount} = this.state
    const {denominationsDetails} = this.props

    return (
      <div>
        <div>
          <h1>Sarah Williams</h1>
          <div>
            <p>Your Balance</p>
            <p>{amount}</p>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            <DenominationItem key={denominationsDetails.id} />
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
